import { Router } from "express";

import * as controller from "../controllers/client";

const router = Router();

router.get("/client", controller.getAll);
router.get("/client/lawsuits", controller.getClientsAndLawSuits);
router.get(
  "/client/:clientId/state/:stateId/average",
  controller.getAverageById
);
router.post("/client", controller.register);

export default router;
