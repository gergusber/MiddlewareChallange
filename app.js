import express from "express";
import router from "./routes/login.js";
import get404 from "./controllers/404.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/login", router); //index//login

//tutuca(lo otro)

app.use(get404);
// app.use("/", (req, res, next) => {}); //index

app.listen(3000);
