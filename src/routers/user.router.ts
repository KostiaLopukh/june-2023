import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { ERole } from "../enums/role.enum";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getAllPaginated);

router.get(
  "/me",
  authMiddleware.checkAccessToken(ERole.USER),
  userController.getMe,
);
router.put(
  "/me",
  commonMiddleware.isBodyValid(UserValidator.update),
  authMiddleware.checkAccessToken(ERole.USER),
  userController.updateMe,
);
router.delete(
  "/me",
  authMiddleware.checkAccessToken(ERole.USER),
  userController.deleteMe,
);

router.get("/:id", commonMiddleware.isIdValid, userController.getById);

export const userRouter = router;
