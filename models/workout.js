const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
	type: {
		type: String,
		required: "exercise type is required!"
	},
	name: {
		type: String,
		required: "exercise name is required!"
	},
	duration: {
		type: Number,
		required: "duration of exercise is required!"
	},
	distance: {
		type: Number
	},
	weight: {
		type: Number
	},
	reps: {
		type: Number
	},
	sets: {
		type: Number
	}
});

const WorkoutSchema = new Schema({
	day: {
			type: Date,
			default: Date.now
	},
	exercises: [ ExerciseSchema ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;