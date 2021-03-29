import express from "express";
import { getPolicybyId, getPolicies } from "../controllers/policy.js";

const routerPolicies = express.Router();

routerPolicies.get("/:id", getPolicybyId);
routerPolicies.get("/", getPolicies);

export default routerPolicies;
