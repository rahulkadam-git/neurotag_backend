const mongoose = require("mongoose");

const customerData = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.ObjectId,
    },
    create_time: {
      type: Date,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    name: {
      type: String,
    },
    otherInfo: {
      ref: String,
      form_id: String,
    },
    userType: {
      type: String,
    },
    ip: {
      city: String,
      country: String,
      state: String,
    },
    device: {
      types: String,
      user_agent: String,
      api_cmd: String,
      http_referer: String,
      requested_with: String,
      b_cookie: String,
      os: String,
      browser: String,
      machine: String,
    },
    products: [{ $oid: mongoose.Schema.ObjectId }],
    total_scans: {
      type: Number,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updateAt",
    },
  }
);

module.exports = mongoose.model("Customer", customerData);
