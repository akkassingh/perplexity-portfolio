import axios from "axios";

export default async function handler(req, res) {
  const username = "akkassingh";
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers = token ? { Authorization: `token ${token}` } : {};
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      { headers, params: { sort: 'updated', per_page: 10 } }
    );
    const repos = response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description,
      language: repo.language,
      updated_at: repo.updated_at,
    }));
    res.status(200).json(repos);
  } catch (error) {
    console.error("GitHub API error:", error.message);
    res.status(500).json({ error: "Failed to fetch GitHub repos" });
  }
}
