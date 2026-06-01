import axios from "axios";

export default async function getAllPages(url, GITHUB_TOKEN) {
    let page = 1;
    let results = [];

    const headers = {
        Accept: "application/vnd.github.v3+json",
    };
    if (GITHUB_TOKEN && GITHUB_TOKEN.trim()) {
        headers.Authorization = `token ${GITHUB_TOKEN.trim()}`;
    }

    while (true) {
        const res = await axios.get(url, {
            params: { per_page: 100, page },
            headers,
        });

        if (!res.data || res.data.length === 0) break;

        results.push(...res.data);
        page++;
    }

    return results;
}