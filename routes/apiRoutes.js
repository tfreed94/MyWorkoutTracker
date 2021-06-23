const router = require("express").Router();
const dbModel = require("../models");

router.get("/api/workouts", (req, res) => {
    dbModel.Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});

router.post("/api/workouts", (req, res) => {
    dbModel.Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
});

router.get("/api/workouts/range", (req, res) => {
    dbModel.Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});

router.post("/api/workouts/range", (req, res) => {
    dbModel.Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    dbModel.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }

    )
    
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
});

module.exports = router;