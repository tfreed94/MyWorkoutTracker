const router = require("express").Router();
const dbModel = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    
    dbModel.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});

router.post("/api/workouts", (req, res) => {
    dbModel.create({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
});

router.get("/api/workouts/range", (req, res) => {
    dbModel.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});

router.post("/api/workouts/range", (req, res) => {
    dbModel.create({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    dbModel.findByIdAndUpdate(params.id,

        { $push: { exerciseTypes: body } }, { new: true, runValidators: true }
    )
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
});
module.exports = router;