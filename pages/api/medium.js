import axios from "axios";

const mediumRSSURL = "https://medium.com/feed/@akkassingh";

export default async function handler(req, res) {
  try {
    const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumRSSURL)}`;
    const response = await axios.get(rss2jsonUrl);
    const articles = response.data.items.map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      thumbnail: item.thumbnail || null,
      categories: item.categories,
    }));
    res.status(200).json(articles);
  } catch (error) {
    console.error("Medium RSS error:", error.message);
    res.status(500).json({ error: "Failed to fetch Medium articles" });
  }
}
