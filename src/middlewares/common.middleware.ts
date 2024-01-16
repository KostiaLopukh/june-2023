import { NextFunction, Request, Response } from "express";
import { isObjectIdOrHexString } from "mongoose";

class CommonMiddleware {
  public isIdValid(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      if (!isObjectIdOrHexString(id)) {
        throw new Error("wrong ID param");
      }

      next();
    } catch (e) {
      next(e);
    }
  }
}

export const commonMiddleware = new CommonMiddleware();
