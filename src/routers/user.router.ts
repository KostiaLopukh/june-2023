import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { commonMiddleware } from "../middlewares/common.middleware";

const router = Router();

router.get("", userController.getAll);

router.get("/:id", commonMiddleware.isIdValid, userController.getById);
router.put("/:id", commonMiddleware.isIdValid, userController.updateById);
router.delete("/:id", commonMiddleware.isIdValid, userController.deleteById);

export const userRouter = router;
