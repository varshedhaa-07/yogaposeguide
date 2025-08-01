import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const DashboardPage = () => {
  const [todaySummary, setTodaySummary] = useState(null);
  const [weeklyData, setWeeklyData] = useState({});
  const [overallSummary, setOverallSummary] = useState(null);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userid");

  // Fetch data for charts
  const fetchDashboardData = async () => {
    try {
      const [todayRes, weeklyRes, summaryRes] = await Promise.all([
        axios.get(`http://localhost:8080/api/progress/user/${userId}/today-summary`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`http://localhost:8080/api/progress/user/${userId}/weekly`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`http://localhost:8080/api/progress/user/${userId}/summary`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setTodaySummary(todayRes.data);
      setWeeklyData(weeklyRes.data);
      setOverallSummary(summaryRes.data);
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Prepare weekly chart data
  const weeklyLabels = Object.keys(weeklyData || {});
  const weeklyValues = Object.values(weeklyData || {});

  const weeklyChartData = {
    labels: weeklyLabels,
    datasets: [
      {
        label: "Completed Poses",
        data: weeklyValues,
        fill: true,
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">📊 My Yoga Progress Dashboard</h2>

      <Row className="mb-5">
        <Col md={6} className="mb-4">
          <Card className="shadow p-3">
            <h5 className="text-center">Today's Progress</h5>
            {todaySummary && (
              <div style={{ width: "350px", margin: "0 auto" }}>
                <Pie
                  data={{
                    labels: ["Completed", "Pending"],
                    datasets: [
                      {
                        data: [
                          todaySummary.completedPoses,
                          todaySummary.totalPoses - todaySummary.completedPoses,
                        ],
                        backgroundColor: ["#4caf50", "#f44336"],
                        hoverBackgroundColor: ["#66bb6a", "#ef5350"],
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: { legend: { position: "bottom" } },
                  }}
                />
                <p className="text-center mt-3">
                  ✅ {todaySummary.completedPoses} / {todaySummary.totalPoses} completed
                </p>
              </div>
            )}
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="shadow p-3">
            <h5 className="text-center">Weekly Progress</h5>
            <Line
              data={weeklyChartData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                  y: { beginAtZero: true, stepSize: 1 },
                },
              }}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
