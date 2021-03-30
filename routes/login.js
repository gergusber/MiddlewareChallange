import express from "express";
import { postLogin } from "../controllers/login.js";

const routerlogin = express.Router();

routerlogin.post("/", postLogin);

export default routerlogin;
