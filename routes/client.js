import express from "express";
import { getClients } from "../controllers/client.js";

const routerClients = express.Router();

// login/ => Post
routerClients.get("/", getClients);

export default routerClients;
