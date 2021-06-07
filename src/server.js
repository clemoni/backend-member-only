import express from "express";
require("colors");
require("dotenv").config();

import * as admin from "firebase-admin";
import credentials from "./credentials.json";

import { routes } from "./routes";

const PORT = 8081;

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`.rainbow);
});
