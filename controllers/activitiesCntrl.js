const Activity = require("../models/activitiesModel");

const ActivityCntrl = {
    getAll(req,res){
        Activity.find({}).then(data => {
            res.json(data)
        })
    }
}

module.exports = ActivityCntrl;