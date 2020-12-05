const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
      },
    address: {
        type: String,
        required: true,
      },
    dateOfBirth: {
        type: Date
    } ,
    mobileNumber: {
        type: Number
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
