import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Modal, Form } from "react-bootstrap";
import axios from "axios";

const RoutinePage = () => {
  const [routine, setRoutine] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [allPoses, setAllPoses] = useState([]);
  const [selectedPoseIds, setSelectedPoseIds] = useState([]);
  const [showEdit, setShowEdit] = useState(false);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userid");

  // Fetch user's routines
  const fetchRoutine = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/routine/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRoutine(res.data);
    } catch (err) {
      console.error("Error fetching routine:", err);
    }
  };

  // Fetch all poses
  const fetchAllPoses = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/auth/poses`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAllPoses(res.data);
    } catch (err) {
      console.error("Error fetching all poses:", err);
    }
  };

  useEffect(() => {
    fetchRoutine();
    fetchAllPoses();
  }, []);

  // Delete a routine
  const handleDelete = async (routineId) => {
    if (!window.confirm("Remove this routine?")) return;
    try {
      await axios.delete(`http://localhost:8080/api/routine/delete/${routineId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRoutine(routine.filter((item) => item.id !== routineId));
    } catch (err) {
      console.error("Error deleting routine:", err);
    }
  };

  // Open edit modal
  const handleEditRoutine = (routineItem) => {
    setSelectedRoutine(routineItem);
    const poseIds = routineItem.poses.map((pose) => pose.id);
    setSelectedPoseIds(poseIds);
    setShowEdit(true);
  };

  // Handle pose selection in edit modal
  const handlePoseSelection = (poseId) => {
    setSelectedPoseIds((prev) =>
      prev.includes(poseId) ? prev.filter((id) => id !== poseId) : [...prev, poseId]
    );
  };

  // Update routine
  const handleUpdateRoutine = async () => {
    try {
      await axios.put(
        `http://localhost:8080/api/routine/update/${selectedRoutine.id}`,
        { userId: userId, poseIds: selectedPoseIds },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setShowEdit(false);
      fetchRoutine();
    } catch (err) {
      console.error("Error updating routine:", err);
    }
  };

  // Mark pose as completed (will reflect in Dashboard)
  const handleMarkComplete = async (poseId) => {
    try {
      await axios.post(
        "http://localhost:8080/api/progress/mark",
        { userId: userId, poseId: poseId, status: "COMPLETED" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("✅ Pose marked as completed! Check your Dashboard for progress.");
    } catch (err) {
      console.error("Error marking progress:", err);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🧘 My Daily Routine</h2>

      {routine.map((item) => (
        <div key={item.id} className="mb-5">
          <h4 className="d-flex justify-content-between align-items-center">
            Routine
            <div>
              <Button
                variant="warning"
                className="me-2"
                onClick={() => handleEditRoutine(item)}
              >
                📝 Edit Routine
              </Button>
              <Button variant="danger" onClick={() => handleDelete(item.id)}>
                ❌ Delete Routine
              </Button>
            </div>
          </h4>

          <Row className="mt-3">
            {item.poses.map((pose) => (
              <Col xs={12} md={4} key={pose.id} className="mb-4">
                <Card className="shadow">
                  <Card.Img
                    variant="top"
                    src={pose.imgUrl}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      {pose.poseName} <Badge bg="dark">{pose.difficulty}</Badge>
                    </Card.Title>
                    <Button
                      variant="success"
                      size="sm"
                      className="mt-2"
                      onClick={() => handleMarkComplete(pose.id)}
                    >
                      ✅ Complete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}

      {/* Edit Routine Modal */}
      <Modal show={showEdit} onHide={() => setShowEdit(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Routine Poses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRoutine && (
            <Form>
              {allPoses.map((pose) => (
                <Form.Check
                  key={pose.id}
                  type="checkbox"
                  label={pose.poseName}
                  checked={selectedPoseIds.includes(pose.id)}
                  onChange={() => handlePoseSelection(pose.id)}
                />
              ))}
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEdit(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateRoutine}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default RoutinePage;
