import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Badge, Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const YogaPoses = () => {
  const [poses, setPoses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 

    if (token) {
      fetchPoses(token);
    }
  }, []);

  const fetchPoses = async (token) => {
    try {
      const res = await axios.get("http://localhost:8080/api/auth/poses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPoses(res.data);
    } catch (error) {
      console.error("Error fetching yoga poses:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this pose?")) return;

    try {
      await axios.delete(`http://localhost:8080/api/auth/poses/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setPoses(poses.filter((pose) => pose.id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete pose.");
    }
  };

  const role = localStorage.getItem("roles");
  let isAdmin = false;
  try {
    const parsedRole = JSON.parse(role);
    if (Array.isArray(parsedRole)) {
      isAdmin = parsedRole.includes("ADMIN");
    } else {
      isAdmin = parsedRole === "ADMIN";
    }
  } catch (e) {
    isAdmin = role === "ADMIN";
  }

  if (!isLoggedIn) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="warning">
          ⚠️ Please <Link to="/login">login</Link> to view yoga poses.
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Explore Yoga Poses</h2>

      {isAdmin && (
        <div className="text-end mb-3">
          <Button variant="success" onClick={() => navigate("/add-pose")}>
            ➕ Add New Pose
          </Button>
        </div>
      )}

      <Row>
        {poses.map((pose, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Card
              style={{
                background: "linear-gradient(145deg, #f5c24aff, #e0ca3aff)",
                borderRadius: "15px",
              }}
              className="shadow-sm"
            >
              <Card.Img
                variant="top"
                src={pose.imgUrl}
                alt={pose.poseName}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{pose.poseName}</Card.Title>
                <Badge bg="dark" className="mb-2">{pose.difficulty}</Badge>
                <Card.Text>
                  {pose.poseDes?.length > 80
                    ? pose.poseDes.substring(0, 80) + "..."
                    : pose.poseDes}
                </Card.Text>

                <Link to={`/poses/${pose.id}`} className="btn btn-outline-dark me-2">
                  View Details
                </Link>

                {isAdmin && (
                  <>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => navigate(`/edit-pose/${pose.id}`)}
                    >
                      ✏️ Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(pose.id)}
                    >
                      🗑 Delete
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default YogaPoses;
