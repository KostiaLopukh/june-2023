import { NextFunction, Request, Response } from "express";

import { read } from "../fs.service";
import { userService } from "../services/user.service";

class UserController {
  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getAll();

      return res.status(200).json({ data: users });
    } catch (e) {
      next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      // винести в сервіс
      const users = await read();
      const index = users.findIndex((user) => user.id === id);
      if (index === -1) {
        throw new Error("user not found");
      }
      res.json({ data: users[index] });
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
