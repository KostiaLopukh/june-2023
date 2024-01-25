import {Router} from "express";

import {authController} from "../controllers/auth.controller";
import {authMiddleware} from "../middlewares/auth.middleware";
import {commonMiddleware} from "../middlewares/common.middleware";
import {UserValidator} from "../validators/user.validator";
import {ERole} from "../enums/role.enum";

const router = Router();

router.post(
  "/admin/sign-up",
  commonMiddleware.isBodyValid(UserValidator.create),
  authController.signUpAdmin,
);
router.post(
  "/admin/sign-in",
  commonMiddleware.isBodyValid(UserValidator.login),
  authController.signInAdmin,
);

router.post(
  "/sign-up",
  commonMiddleware.isBodyValid(UserValidator.create),
  authController.signUp,
);
router.post(
  "/sign-in",
  commonMiddleware.isBodyValid(UserValidator.login),
  authController.signIn,
);

router.post(
  "/refresh",
  authMiddleware.checkRefreshToken(ERole.USER),
  authController.refresh,
);

export const authRouter = router;
