import { Router } from "express";

import { authController } from "../controllers/auth.controller";

const router = Router();

router.post("/sign-up", authController.signUp);
router.post("/sign-in", authController.signIn);

export const authRouter = router;
