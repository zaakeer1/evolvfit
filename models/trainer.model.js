const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trainerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 5,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      lowercase: true,
    },
    userRefs: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }],
  },
  {
    timestamps: true,
    strictPopulate: false
  }
);

//module.exports = trainerSchema;
module.exports = mongoose.model('Trainer', trainerSchema);