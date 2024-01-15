// HW – закінчити з CRUD операціями.
//     Винести базу даних в json.file, при створенні записувати туда нових юзерів через fs
// При створенні валідацію на імя і вік, імя повинно бути більше 3 символів, вік – не менше нуля
// На гет, пут, деліт юзерів перевірити чи такий юзер є

import express, { NextFunction, Request, Response } from "express";

import { configs } from "./configs/config";
import { ApiError } from "./errors/api.error";
import { userRouter } from "./routers/user.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

app.use(
  "*",
  (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    return res.status(err?.status || 500).json({
      message: err?.message,
      status: err?.status,
    });
  },
);

const PORT = configs.PORT;
app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`);
});
