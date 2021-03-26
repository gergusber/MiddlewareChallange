import express from "express";
import { postLogin } from "../controllers/login.js";

const router = express.Router();

// login/login => Post
router.post("/", postLogin);

export default router;
