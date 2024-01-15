import { Request, Response, Router } from "express";

import { userController } from "../controllers/user.controller";
import { read, write } from "../fs.service";
import { commonMiddleware } from "../middlewares/common.middleware";

const router = Router();

router.get("", userController.getAll);
router.get("/:id", commonMiddleware.isIdValid, userController.getById);
//
router.post("", async (req: Request, res: Response) => {
  try {
    const { email, name, age } = req.body;
    if (!age || !Number.isInteger(age) || age <= 0 || age > 100) {
      throw new Error("wrong age");
    }
    if (!email || !email.includes("@")) {
      throw new Error("wrong email");
    }
    if (!name || name.length <= 3) {
      throw new Error("wrong name");
    }
    const users = await read();

    const newUser = { id: users[users.length - 1].id + 1, email, name, age };
    users.push(newUser);
    await write(users);

    res.status(201).json({ data: newUser });
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    console.log("here");
    return;
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      throw new Error("wrong ID param");
    }

    const users = await read();
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new Error("user not found");
    }
    users.splice(index, 1);
    await write(users);

    res.sendStatus(204);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { email, age, name } = req.body;

    if (!Number.isInteger(id)) {
      throw new Error("wrong ID param");
    }

    if (!age || !Number.isInteger(age) || age <= 0 || age > 100) {
      throw new Error("wrong age");
    }
    if (!email || !email.includes("@")) {
      throw new Error("wrong email");
    }
    if (!name || name.length <= 3) {
      throw new Error("wrong name");
    }

    const users = await read();
    const user = users.find((user) => user.id === id);
    if (!user) {
      throw new Error("user not found");
    }
    user.name = name;
    user.age = age;
    user.email = email;

    await write(users);

    res.status(201).json(user);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

export const userRouter = router;
