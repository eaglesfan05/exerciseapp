const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivitySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
})

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;