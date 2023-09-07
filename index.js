import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb+srv://naveenDB:Naveen123@cluster0.8oflo7x.mongodb.net/first_db?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start your Express app only after successfully connecting to MongoDB
    app.listen(6001, () => {
      console.log("Server is running on port 6001");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.get("/", (req, res) => {
  res.send("Hello world");
});
