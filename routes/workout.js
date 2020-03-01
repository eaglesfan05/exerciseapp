const express = require('express')
const router = express.Router()

const  WorkoutCntrl= require('../controllers/workoutCntrl');

// GET  "/""
// Calls controller which will return all activities for a specific workout
router.get("/workouts", WorkoutCntrl.getAll);

router.post("/workout", WorkoutCntrl.create)


module.exports = router