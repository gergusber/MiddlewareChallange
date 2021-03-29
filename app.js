import express from "express";
import routerlogin from "./routes/login.js";
import routerClients from "./routes/client.js";
import routerPolicies from "./routes/policies.js";
import get404 from "./controllers/404.js";
import dotenv from "dotenv";
import verifyToken from "./libs/auth.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("jwtTokenSecret", `${process.env.SECRET}`);

app.use("/api/v1/login", routerlogin);
app.use("/api/v1/clients", verifyToken, routerClients);
app.use("/api/v1/policies", verifyToken, routerPolicies);

app.use(get404);

app.listen(3000);
