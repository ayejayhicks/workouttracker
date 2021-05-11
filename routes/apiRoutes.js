const Workout = require("../models/workout")
var db = require("../models");
var path = require("path");

module.exports = function (app) {
    
    app.get("/api/workouts", function (req, res) {
        Workout.find({})
            .then(workouts => {
                res.json(workouts);
            })  
            .catch(err => {
                res.json(err);
            });
    });
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname + "./../public/stats.html"))
    })
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(params.id,
            { $push: { exercises: body } }, { new: true })
            .then(workoutDB => {
                res.json(workoutDB);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    app.post("/api/workouts", ({ body }, res) => {
        Workout.create(body)
            .then(workoutDB => {
                res.json(workoutDB);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    app.delete("/api/workouts", ({ body }, res) => {
        Workout.findByIdAndRemove(body.id)
            .then(() => {
                res.json(true);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    app.get("/api/workouts/range", function (req, res) {
        Workout.find({}).limit(10)
            .then(workouts => {
                res.json(workouts);
            })
            .catch(err => {
                res.json(err);
            });
    });
};