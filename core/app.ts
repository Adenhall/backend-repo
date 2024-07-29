import express, { Application, Request, Response } from "express";
import * as functions from "firebase-functions";

import routes from "../routes";

const app: Application = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("It's ALIVEEE!");
});

app.use(routes);

export const api = functions.https.onRequest(app);
