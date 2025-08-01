import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPoseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    poseName: "",
    poseDes: "",
    benefits: "",
    difficulty: "",
    imgUrl: ""
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check admin role
    const role = localStorage.getItem("roles");
    let isAdmin = false;

    try {
      const parsedRole = JSON.parse(role);
      isAdmin = Array.isArray(parsedRole)
        ? parsedRole.includes("ADMIN")
        : parsedRole === "ADMIN";
    } catch {
      isAdmin = role === "ADMIN";
    }

    if (!isAdmin) {
      alert("Access denied. Admins only.");
      navigate("/poses");
    }
  }, [navigate]);

  // Fetch Pose Data
  useEffect(() => {
    const fetchPose = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/auth/poses/${id}`);
        setFormData({
          poseName: res.data.poseName || "",
          poseDes: res.data.poseDes || "",
          benefits: res.data.benefits || "",
          difficulty: res.data.difficulty || "",
          imgUrl: res.data.imgUrl || ""
        });
      } catch (err) {
        console.error("Failed to fetch pose:", err);
        alert("Error fetching pose data");
        navigate("/poses");
      }
    };

    fetchPose();
  }, [id, navigate]);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  // Submit Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/api/auth/poses/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      setMessage("✅ Pose updated successfully!");
      setTimeout(() => navigate("/poses"), 1500);
    } catch (err) {
      console.error("Error updating pose:", err);
      setMessage("❌ Failed to update pose.");
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
      <h3 className="text-center mb-3">Edit Yoga Pose</h3>
      {message && (
        <Alert variant={message.includes("✅") ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Pose Name</Form.Label>
          <Form.Control
            type="text"
            name="poseName"
            value={formData.poseName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="poseDes"
            value={formData.poseDes}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Benefits</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Difficulty</Form.Label>
          <Form.Select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            required
          >
            <option value="">Select Difficulty</option>
            <option value="BEGINNER">Beginner</option>
            <option value="INTERMEDIATE">Intermediate</option>
            <option value="ADVANCED">Advanced</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="imgUrl"
            value={formData.imgUrl}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="warning" type="submit">💾 Update Pose</Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditPoseForm;
