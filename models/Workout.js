const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exerciseTypes: [
        {
            type: {
                type: String,
                trim: true,
                required: "Must enter an exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Must enter an exercise name"
            },
            duration: {
                type: Number,
                required: "Time duration must be a number"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
},
    {
        toJSON: { virtuals: true }
    }
);
workoutSchema.virtual("totalDuration").get(() => {

    return this.exerciseTypes.reduce((result, session) => {
        return result + session.duration;
    }, 0);

});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;