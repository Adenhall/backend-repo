import { Router } from "express";

import { usersControllers } from "../controllers";

const usersRouter = Router();

usersRouter.get("/", usersControllers.listUsers);

export default usersRouter;
