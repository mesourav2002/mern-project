import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
mongoose
  .connect(
    "mongodb+srv://sourav:sourav@mern-project.h52925b.mongodb.net/mern-project?retryWrites=true&w=majority&appName=mern-project"
  )
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.get("/api/user", userRouter);
