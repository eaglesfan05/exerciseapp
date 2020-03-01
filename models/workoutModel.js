const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String
        
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    activities: [
        {
            type: Schema.Types.ObjectId,
            ref: "Activity"
        }
    ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;