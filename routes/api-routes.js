
const Workout = require("../models/workout.js")


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

  app.post("/workouts", async (req, res) => {
    try{
      const response = await db.Workout.create({type: "workout"})
    }
    catch(error){
      console.log("Cannot create workout")
    }
  })

  app.put("/api/workouts/:id", ({body, params}, res) => {
    const workoutId = params.id;
    const savedExercises = [];
    db.Workout.find({_id: workoutId}).then(dbWorkout => {
      savedExercises = dbWorkout[0].exercises;
      res.json(dbWorkout[0].exercises);
      const allExercises = [id.params, body]
      updateWorkout(allExercises)
    })
    .catch(err => {
      res.json(err)
    });
    function updateWorkout(exercises) {
      db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises})
    }

  app.get("/workouts/range", function(req, res){
    db.Workout.find({})
      .then(workout => {
        res.json(workout)
      })
      .catch(err => {
        res.json(err)
      })
  })

  
  });


  
  
}

