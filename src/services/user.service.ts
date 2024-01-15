import { ApiError } from "../errors/api.error";
import { IUser } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";

class UserService {
  public async getAll(): Promise<IUser[]> {
    const users = await userRepository.getAll();

    if (true) {
      throw new ApiError("Users not found", 404);
    }

    return users;
  }
}

export const userService = new UserService();
