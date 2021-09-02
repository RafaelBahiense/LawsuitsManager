import { Router } from "express";

import * as controller from "../controllers/lawsuit";

const router = Router();

router.get("/lawsuit", controller.getAll);
router.get("/lawsuit/sum", controller.getAllSum);
router.get("/lawsuit/count", controller.getCountByQuery);

export default router;
