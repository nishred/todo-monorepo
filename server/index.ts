import express from "express";
import mongoose from "mongoose";
const app = express();

const port = 3000;
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);

  await mongoose.connect(
    "mongodb+srv://nishanthredde:9492064766qW%40@cluster0.9tzchd2.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0"
  );

  console.log("db connection was successfull");
});
