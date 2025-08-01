// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';

// const PoseDetails = () => {
//   const { id } = useParams();
//   const [pose, setPose] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     axios.get(`http://localhost:8080/api/auth/poses/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       }
//     })
//       .then(res => {
//         setPose(res.data);
//       })
//       .catch(err => {
//         console.error("Backend error:", err);
//       });
//   }, [id]);

//   if (!pose) {
//     return (
//       <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//         <h4>Loading pose details...</h4>
//       </div>
//     );
//   }

//   return (
//     <div className="container-fluid min-vh-100 py-5 bg-light">
//       <div className="container">
//         <div className="row g-5 align-items-start">
//           {/* Image Section */}
//           <div className="col-lg-6">
//             <img
//               src={pose.imgUrl}
//               alt={pose.poseName}
//               className="img-fluid rounded shadow w-100"
//               style={{ maxHeight: '500px', objectFit: 'cover' }}
//             />
//           </div>

//           {/* Textual Info Section */}
//           <div className="col-lg-6">
//             <h2 className="mb-3">{pose.poseName}</h2>
//             <span className={`badge fs-6 mb-3 ${pose.difficulty === 'Hard' ? 'bg-danger' : 'bg-success'}`}>
//               {pose.difficulty}
//             </span>

//             <p className="lead">{pose.poseDes}</p>

//             <h5 className="mt-4">✅ Benefits:</h5>
//             <ul className="list-group list-group-flush">
//               {pose.benefits.split(',').map((benefit, i) => (
//                 <li key={i} className="list-group-item bg-transparent px-0">{benefit.trim()}</li>
//               ))}
//             </ul>

//             <Link to="/poses" className="btn btn-outline-primary mt-4">⬅ Back to All Poses</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PoseDetails;

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
        const res = await axios.get(`http://localhost:8080/api/auth/poses/${id}`);
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
      `http://localhost:8080/api/routine/add`,
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
