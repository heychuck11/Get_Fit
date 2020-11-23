const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

const Workout = require("./models/workout.js")

const app = express();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));




app.get("/", (req, res) => {
  res.sendFile(path.join(__direname + "./public/index.html"))
});


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
  }
);

app.use(require("./routes/index-html.js"))
app.use(require("./routes/api-routes.js"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})