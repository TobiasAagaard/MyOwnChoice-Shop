import express from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

app.get("/", (res, req) => {
  res.send("Denne server");
});

app.listen(4000, () => {
  console.log("Server is running on localhost ");
});
