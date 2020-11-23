const response = require("express");
const path = require("path");
const workout  = require("../models");
const db = require("../models")


module.exports = function (app) {
  app.get("/api/workouts", function (req, res){
    db.Workout.find({})
      .then(workout => {
        res.json(workout)
      })
      .catch(err =>{
        res.json(err);
      })
  });

  app.post("/workouts", function (req, res){
    db.Workout.create(req.body).then(data => {
      res.json(data)
    })
  })

  app.get("/workouts/range", function(req, res){
    db.Workout.find({})
      .then(workout => {
        res.json(workout)
      })
      .catch(err => {
        res.json(err)
      })
  })

  app.put("/api/workouts/:id", ({body, params}, res) => {
    const workoutId = params.id;
    const savedExercises = [];
    db.Workout.find({_id: workoutId}).then(dbWorkout => {
      savedExercises = dbWorkout[0].exercises;
      res.json(dbWorkout[0].exercises);
      const allExercises = [id.params.body]
      updateWorkout(allExercises)
    })
    .catch(err => {
      res.json(err)
    })
  });


  
  
}

