import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Analytics() {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/analytics");
        if (!res.ok) throw new Error("Failed to fetch analytics");
        const data = await res.json();
        setAnalyticsData(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Website Analytics</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {!analyticsData && !error && <p>Loading analytics data...</p>}
        {analyticsData && analyticsData.rows && analyticsData.rows.length > 0 ? (
          <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-md">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Country</th>
                <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">Active Users</th>
              </tr>
            </thead>
            <tbody>
              {analyticsData.rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"}>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">{row.dimensionValues[0].value}</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">{row.metricValues[0].value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !error && <p className="text-center text-gray-600 dark:text-gray-400 mt-8">No visitor data available for the selected date range.</p>
        )}
      </div>
    </Layout>
  );
}
