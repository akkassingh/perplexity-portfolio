import { google } from "googleapis";

export default async function handler(req, res) {
  try {
    const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");
    const PROPERTY_ID = process.env.GOOGLE_ANALYTICS_PROPERTY_ID;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      },
      scopes: "https://www.googleapis.com/auth/analytics.readonly",
    });

    const analyticsDataClient = google.analyticsdata({
      version: "v1beta",
      auth,
    });

    const response = await analyticsDataClient.properties.runReport({
      property: `properties/${PROPERTY_ID}`,
      requestBody: {
        dateRanges: [{ startDate: "2023-01-01", endDate: "today" }],
        dimensions: [{ name: "country" }],
        metrics: [{ name: "activeUsers" }],
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("GA Data API error:", error);
    res.status(500).json({ error: "Failed to fetch analytics data" });
  }
}
