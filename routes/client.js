import express from "express";
import { getClients, getClientsbyId } from "../controllers/client.js";

const routerClients = express.Router();
routerClients.get(":limit", getClients);
routerClients.get("/:id", getClientsbyId);
routerClients.get("/", getClients);

export default routerClients;
