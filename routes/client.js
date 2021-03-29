import express from "express";
import {
  getClients,
  getClientsbyId,
  getClientsbyIdAndPolicies,
} from "../controllers/client.js";

const routerClients = express.Router();
routerClients.get("/:id/policies", getClientsbyIdAndPolicies);
routerClients.get("/:id", getClientsbyId);
routerClients.get(":limit", getClients);
routerClients.get("/", getClients);
export default routerClients;
