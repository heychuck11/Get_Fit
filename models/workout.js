const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const Workoutschema = new Schema({
  day: {
    type: Date,
    default: Date.now
    
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: true
      },
      type: {
        type: String,
        trim: true,
        required: true
      },
      weight: {
        type: Number
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      },
      duration: {
        type: Number
      }
    }
  ]
})

mongoose.model("exercises", Workoutschema)
module.exports = Workoutschema