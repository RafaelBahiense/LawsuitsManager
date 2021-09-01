import { Router } from "express";

import clientRouter from "./client";
import lawsuitRouter from "./lawsuit";

const router = Router();

router.use(clientRouter);
router.use(lawsuitRouter);

export default router;
