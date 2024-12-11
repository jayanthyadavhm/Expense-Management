const mongoose = require("mongoose");

const collaborationSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true, 
  }
);

const CollaborationRequest = mongoose.model("CollaborationRequest", collaborationSchema);

module.exports = CollaborationRequest;
