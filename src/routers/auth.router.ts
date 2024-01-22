import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/sign-up", authController.signUp);
router.post("/sign-in", authController.signIn);

router.post(
  "/refresh",
  authMiddleware.checkRefreshToken,
  authController.refresh,
);

export const authRouter = router;
