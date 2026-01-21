import getAllPages from "@/lib/getAllRepoPages";
import parseRepoUrl from "@/lib/parseRepoUrl";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { url, GITHUB_TOKEN } = await request.json();
        const { owner, repo } = parseRepoUrl(url);

        // Fetch contributors and pull requests in parallel for better performance
        const [contributors, pullRequests] = await Promise.all([
            getAllPages(`https://api.github.com/repos/${owner}/${repo}/contributors`, GITHUB_TOKEN),
            getAllPages(`https://api.github.com/repos/${owner}/${repo}/pulls?state=closed`, GITHUB_TOKEN)
        ]);

        // Process PRs to get merged PR counts per user
        const prCountMap = {};
        let totalMergedPRs = 0;
        const uniqueAuthors = new Set();
        
        pullRequests.forEach(pr => {
            if (pr.merged_at) {
                const user = pr.user?.login;
                if (user) {
                    prCountMap[user] = (prCountMap[user] || 0) + 1;
                    totalMergedPRs++;
                    uniqueAuthors.add(user);
                }
            }
        });

        // Calculate overall repository statistics
        const totalContributions = contributors.reduce((sum, c) => sum + c.contributions, 0);
        const avgContributionsPerUser = totalContributions / (contributors.length || 1);

        // Prepare contributors data (filter out those with 0 merged PRs)
        const activeContributors = contributors
            .filter(contributor => {
                const mergedPRCount = prCountMap[contributor.login] || 0;
                return mergedPRCount > 0;
            })
            .map(contributor => ({
                username: contributor.login,
                avatar: contributor.avatar_url,
                contributions: contributor.contributions,
                mergedPRs: prCountMap[contributor.login] || 0,
                githubUrl: contributor.html_url,
                type: contributor.type || 'User'
            }))
            .sort((a, b) => b.mergedPRs - a.mergedPRs); // Sort by merged PRs descending

        // Calculate author-specific statistics
        const authorStats = {
            totalAuthors: uniqueAuthors.size,
            totalMergedPRs,
            authorsWithPRs: Object.keys(prCountMap).length,
            avgPRsPerAuthor: totalMergedPRs / (uniqueAuthors.size || 1),
            prDistribution: {
                // Categorize authors by PR count
                novice: Object.values(prCountMap).filter(count => count >= 1 && count <= 3).length,
                active: Object.values(prCountMap).filter(count => count >= 4 && count <= 10).length,
                core: Object.values(prCountMap).filter(count => count >= 11 && count <= 30).length,
                expert: Object.values(prCountMap).filter(count => count >= 31).length
            }
        };

        // Repository statistics
        const repoStats = {
            totalContributors: contributors.length,
            activeContributors: activeContributors.length,
            totalContributions,
            avgContributionsPerUser: Math.round(avgContributionsPerUser * 100) / 100,
            topContributor: contributors.length > 0 ? 
                contributors.reduce((max, c) => c.contributions > max.contributions ? c : max)?.login : null,
            repoUrl: `https://github.com/${owner}/${repo}`,
            owner,
            repoName: repo,
            lastUpdated: new Date().toISOString()
        };

        // Prepare data for charts
        const chartData = {
            topContributors: activeContributors
                .slice(0, 10)
                .map(contributor => ({
                    name: contributor.username.substring(0, 12) + (contributor.username.length > 12 ? '...' : ''),
                    contributions: contributor.contributions,
                    mergedPRs: contributor.mergedPRs,
                    username: contributor.username
                })),
            
            prDistribution: [
                { name: '1-3 PRs', value: authorStats.prDistribution.novice },
                { name: '4-10 PRs', value: authorStats.prDistribution.active },
                { name: '11-30 PRs', value: authorStats.prDistribution.core },
                { name: '31+ PRs', value: authorStats.prDistribution.expert }
            ],
            
            activityTrend: activeContributors
                .slice(0, 8)
                .map((contributor, index) => ({
                    month: `Contributor ${index + 1}`,
                    contributions: contributor.contributions,
                    prs: contributor.mergedPRs
                }))
        };

        // Final response structure
        const result = {
            success: true,
            timestamp: new Date().toISOString(),
            repoStats,
            authorStats,
            contributors: activeContributors,
            charts: chartData,
            metadata: {
                apiVersion: '1.0',
                dataPoints: {
                    contributors: activeContributors.length,
                    pullRequests: pullRequests.length,
                    mergedPRs: totalMergedPRs
                },
                note: 'Contributors with 0 merged PRs have been filtered out'
            }
        };

        return NextResponse.json(result);

    } catch (err) {
        console.error("Error in POST handler:", err);
        
        // Enhanced error response
        return NextResponse.json(
            { 
                success: false,
                error: "An error occurred while processing the request.",
                details: err.message || 'Unknown error',
                timestamp: new Date().toISOString()
            },
            { status: 500 }
        );
    }
}