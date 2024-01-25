import { NextFunction, Request, Response } from "express";

import { ERole } from "../enums/role.enum";
import { ApiError } from "../errors/api.error";

class UserMiddleware {
  public haveAccessByRole(...roles: ERole[]) {
    return function (req: Request, res: Response, next: NextFunction) {
      try {
        const payload = req.res.locals.jwtPayload;
        if (!roles.includes(payload?.role)) {
          throw new ApiError("Access denied", 403);
        }
        next();
      } catch (e) {
        next(e);
      }
    };
  }
}

export const userMiddleware = new UserMiddleware();
