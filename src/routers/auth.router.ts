import { Router } from "express";

import { authController } from "../controllers/auth.controller";

const router = Router();

router.post("/sign-up", authController.signUp);

export const authRouter = router;
