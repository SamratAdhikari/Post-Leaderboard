import axios from "axios";
import fs from "fs/promises";
import path from "path";

async function fetchDataAndUpdate() {
    const PAGE_ACCESS_TOKEN = process.env.API_TOKEN;
    const PAGE_ID = process.env.NEXT_PUBLIC_PAGE_ID;

    const DATA_FILE_PATH = path.join(__dirname, "../../public/data.json");

    try {
        // Fetch new data from Facebook API
        const url = `https://graph.facebook.com/v15.0/${PAGE_ID}/posts`;
        const params = {
            fields: "message,created_time,permalink_url,full_picture,reactions.summary(true),shares,comments.summary(true)",
            access_token: PAGE_ACCESS_TOKEN,
        };

        const response = await axios.get(url, { params });
        const data = response.data;

        // Filter and format posts
        const filteredPosts = data.data
            .filter((post) => post.message && post.message.includes("#LITE"))
            .map((post) => {
                const captionParts = post.message.split("\n").filter(Boolean);
                const author = captionParts
                    .find((line) => line.startsWith("Author:"))
                    ?.replace("Author:", "")
                    .trim();
                const text = captionParts
                    .filter((line) => !line.startsWith("Author:"))
                    .join(" ")
                    .replace(/["\\/]/g, "")
                    .replace(/#LITE/g, "")
                    .trim();

                const points =
                    (post.reactions?.summary?.total_count || 0) * 2 +
                    (post.shares?.count * 5 || 0);

                return {
                    Author: author || "Unknown Author",
                    Text: text || "No text found",
                    Image: post.full_picture || "No image found",
                    NumberOfReactions:
                        post.reactions?.summary?.total_count || 0,
                    NumberOfShares: post.shares?.count || 0,
                    NumberOfComments: post.comments?.summary?.total_count || 0,
                    PostLink: post.permalink_url,
                    Points: points,
                };
            });

        // Sort the posts by points
        const sortedPosts = filteredPosts.sort((a, b) => b.Points - a.Points);

        // Prepare data for saving to the file
        const updatedData = {
            posts: sortedPosts,
        };

        // Save new data to file
        await fs.writeFile(
            DATA_FILE_PATH,
            JSON.stringify(updatedData, null, 2),
            "utf-8"
        );
        console.log("Data updated successfully.");
    } catch (error) {
        console.error("Error fetching data from Facebook API:", error);
    }
}

fetchDataAndUpdate();
