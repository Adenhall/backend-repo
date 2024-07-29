import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
