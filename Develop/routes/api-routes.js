const { response } = require("express");
const path = require("path");
const db = require("../models/workout")


module.exports = function (app) {
  app.get("/api/workouts", function (req, res){
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch(err =>{
        res.json(err);
      })
  });

  app.get("/workouts/range", function(req, res){
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch(err => {
        res.json(err)
      })
  })






  app.put("/api/workouts", function(req, res){
    db.Workout.findOneAnother(req.params.id, req.body).then(data => {
      res.json(data)
    })
  })

  app.post("/api/workout", function(req, res){
    db.Workout.create(req.body).then(data => {
      res.json(data)
    })
  })
  
  
  
}

