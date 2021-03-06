const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    sets: {
      type: Number,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
    },
    weightType: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
