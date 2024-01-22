import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";

const router = Router();

router.get("/", userController.getAll);

router.get("/me", authMiddleware.checkAccessToken, userController.getMe);
router.put("/me", authMiddleware.checkAccessToken, userController.updateMe);
router.delete("/me", authMiddleware.checkAccessToken, userController.deleteMe);

router.get("/:id", commonMiddleware.isIdValid, userController.getById);

export const userRouter = router;
