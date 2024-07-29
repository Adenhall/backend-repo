import express, { Application, Request, Response } from "express";
import * as functions from "firebase-functions";

import usersRoutes from "../routes/users";

const app: Application = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("It's ALIVEEE!");
});

app.use("/users", usersRoutes);

export const api = functions.https.onRequest(app);
