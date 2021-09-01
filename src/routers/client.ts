import { Router } from "express";

import * as controller from "../controllers/client";

const router = Router();

router.get("/client", controller.getAll);

export default router;
