import express from "express";
import { postLogin } from "../controllers/login.js";

const routerlogin = express.Router();

// login/ => Post
routerlogin.post("/", postLogin);

export default routerlogin;
