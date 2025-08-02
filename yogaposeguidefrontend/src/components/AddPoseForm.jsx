import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const checkIsAdmin = () => {
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

  return isAdmin;
};

const AddPoseForm = () => {
  const isAdmin = checkIsAdmin();
   const navigate = useNavigate();

  const [formData, setFormData] = useState({
    poseName: "",
    poseDes: "",
    benefits: "",
    difficulty: "",
    imgUrl: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/poses`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      console.log("Pose added:", response.data);
      setMessage("✅ Pose added successfully!");

      setTimeout(() => {
        navigate("/poses");
      }, 1000);


      setFormData({
        poseName: "",
        poseDes: "",
        benefits: "",
        difficulty: "",
        imgUrl: ""
      });
    } catch (error) {
      console.error("Error adding pose:", error);
      setMessage("❌ Failed to add pose. Check input or authentication.");
    }
  };

  if (!isAdmin) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">
          You are not authorized to add yoga poses.
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center text-primary mb-4">Add New Yoga Pose</h2>

        {message && (
          <div className={`alert ${message.includes("✅") ? "alert-success" : "alert-danger"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="poseName" className="form-label">Pose Name</label>
            <input
              type="text"
              className="form-control"
              id="poseName"
              name="poseName"
              value={formData.poseName}
              onChange={handleChange}
              required
              placeholder="e.g. Tree Pose"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="poseDes" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="poseDes"
              name="poseDes"
              value={formData.poseDes}
              onChange={handleChange}
              rows="3"
              placeholder="Describe the pose"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="benefits" className="form-label">Benefits</label>
            <textarea
              className="form-control"
              id="benefits"
              name="benefits"
              value={formData.benefits}
              onChange={handleChange}
              rows="3"
              placeholder="Comma-separated benefits"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="difficulty" className="form-label">Difficulty</label>
            <select
              className="form-select"
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              required
            >
              <option value="">Select Difficulty</option>
              <option value="BEGINNER">Beginner</option>
              <option value="INTERMEDIATE">Intermediate</option>
              <option value="ADVANCED">Advanced</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="imgUrl" className="form-label">Pose Image URL</label>
            <input
              type="url"
              className="form-control"
              id="imgUrl"
              name="imgUrl"
              value={formData.imgUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            ➕ Add Pose
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPoseForm;
