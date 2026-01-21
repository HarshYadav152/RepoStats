import axios from "axios";

export default async function getAllPages(url,GITHUB_TOKEN) {
    let page = 1;
    let results = [];

    while (true) {
        const res = await axios.get(url, {
            params: { per_page: 100, page },
            // headers: {
            //     Authorization: `Bearer ${GITHUB_TOKEN}`,
            // },
        });

        if (res.data.length === 0) break;

        results.push(...res.data);
        page++;
    }

    return results;
}