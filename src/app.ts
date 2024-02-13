import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
import * as http from "http";
import * as mongoose from "mongoose";
import { Server } from "socket.io";
import * as swaggerUi from "swagger-ui-express";

import { configs } from "./configs/config";
import { runAllCronJobs } from "./crons";
import { ERole } from "./enums/role.enum";
import { ApiError } from "./errors/api.error";
import { userRepository } from "./repositories/user.repository";
import { adminRouter } from "./routers/admin.router";
import { authRouter } from "./routers/auth.router";
import { userRouter } from "./routers/user.router";
import * as swaggerDocument from "./unils/swagger.json";

const app = express();
const server = http.createServer(app);

const io = new Server(server, { cors: { origin: "*" } });

// io.use(()=>{
//
// })

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message:create", ({ data }) => {
    io.emit("all", data);
  });

  socket.on("click", () => {
    console.log("click click click ");

    // one to one message
    // socket.emit("clock");

    // to all users message
    // io.emit("all", "MESSAGE TO ALL");

    // to all users message except sender
    // socket.broadcast.emit("allExceptMe", "MESSAGE TO ALL EXCEPT ME");
  });

  socket.on("room:join", ({ roomId }) => {
    socket.join(roomId);

    socket.to(roomId).emit("room:newUserJoined", socket.id);
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/users", userRouter);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
server.listen(PORT, async () => {
  await mongoose.connect(configs.DB_URL);
  const user = await userRepository.getOneByParams({});
  if (!user) {
    await userRepository.create({
      role: ERole.SUPER_ADMIN,
      email: "super_admin@gmail.com",
    });
  }
  runAllCronJobs();
  console.log(`Server has started on PORT ${PORT}`);
});
