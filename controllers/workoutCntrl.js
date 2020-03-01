const Workout = require("../models/workoutModel");

const WorkoutCntrl = {
    getAll(req,res){
        Workout.find({}).then(data => {
            res.json(data)
        })
    },
    create(req, res){
        console.log("creating")
        Workout.create(req.body).then(data => {
            console.log("posted")
            res.json(data)
        }).catch(err => res.json(err) )
    }
}



module.exports = WorkoutCntrl;