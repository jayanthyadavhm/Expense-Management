const express = require("express");
const router = express.Router();
const CollaborationRequest = require("../models/CollaborationRequest");


router.post("/send", async (req, res) => {
  const { from, to } = req.body;

  if (from === to) {
    return res.status(400).json({ error: "You cannot send a request to yourself." });
  }

  try {
    const existingRequest = await CollaborationRequest.findOne({ from, to, status: "pending" });
    if (existingRequest) {
      return res.status(400).json({ error: "Request already exists." });
    }

    const request = new CollaborationRequest({ from, to });
    await request.save();
    res.status(201).json({ message: "Request sent successfully.", request });
  } catch (error) {
    res.status(500).json({ error: "Error sending request." });
  }
});


router.get("/requests/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const requests = await CollaborationRequest.find({
      $or: [{ from: userId }, { to: userId }],
    }).populate("from to", "name email"); 
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: "Error fetching requests." });
  }
});


router.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!["accepted", "rejected"].includes(status)) {
    return res.status(400).json({ error: "Invalid status." });
  }

  try {
    const request = await CollaborationRequest.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!request) {
      return res.status(404).json({ error: "Request not found." });
    }
    res.status(200).json({ message: "Request updated successfully.", request });
  } catch (error) {
    res.status(500).json({ error: "Error updating request." });
  }
});

module.exports = router;