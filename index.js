import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
mongoose
  .connect(
    "mongodb+srv://mahasiswa123:mahasiswa123@cluster0.ux2kbb5.mongodb.net/mahasiswa?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connect Success");
  })
  .catch((err) => console.log(err));
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(8080, () => console.log("Server up and running..."));
