import { NextFunction, Request, Response } from "express";

class CommonMiddleware {
  public isIdValid(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      if (!Number.isInteger(id)) {
        throw new Error("wrong ID param");
      }

      next();
    } catch (e) {
      next(e);
    }
  }
}

export const commonMiddleware = new CommonMiddleware();
