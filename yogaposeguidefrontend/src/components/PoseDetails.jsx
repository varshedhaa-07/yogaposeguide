import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Badge, Alert } from "react-bootstrap";
import axios from "axios";

const PoseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pose, setPose] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchPose = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/poses/${id}`);
        setPose(res.data);
      } catch (err) {
        console.error("Error fetching pose:", err);
      }
    };
    fetchPose();
  }, [id]);

  const handleAddToRoutine = async () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userid"); // Ensure this is set at login

  try {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/routine/add`,
      { 
        userId: Number(userId),  // convert to number if needed
        poseIds: [Number(id)]    // send as array
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setMessage("✅ Pose added to your routine!");
    setTimeout(() => navigate("/routine"), 1500);
  } catch (err) {
    console.error("Failed to add to routine:", err);
    setMessage("❌ Failed to add pose. Please try again.");
  }
};


  if (!pose) return <div className="text-center mt-5">Loading...</div>;

  return (
    <Container className="mt-5" style={{ maxWidth: "700px" }}>
      <Card className="shadow-lg p-3">
        <Card.Img variant="top" src={pose.imgUrl} style={{ height: "300px", objectFit: "cover" }} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            {pose.poseName}
            <Badge bg="dark">{pose.difficulty}</Badge>
          </Card.Title>
          <Card.Text className="mt-3">{pose.poseDes}</Card.Text>
          <Card.Text>
            <strong>Benefits:</strong> {pose.benefits}
          </Card.Text>

          {message && (
            <Alert variant={message.includes("✅") ? "success" : "danger"}>{message}</Alert>
          )}

          <div className="d-flex justify-content-center mt-3">
            <Button variant="success" onClick={handleAddToRoutine}>
              ➕ Add to My Routine
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PoseDetails;
