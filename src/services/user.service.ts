import { ApiError } from "../errors/api.error";
import { userRepository } from "../repositories/user.repository";
import { IUser } from "../types/user.type";

class UserService {
  public async getAll(): Promise<IUser[]> {
    return await userRepository.getAll();
  }

  public async getById(id: string): Promise<IUser> {
    const user = await userRepository.getById(id);
    if (!user) {
      throw new ApiError("User not found", 422);
    }
    return user;
  }

  public async updateById(id: string, body: Partial<IUser>): Promise<IUser> {
    const user = await userRepository.getById(id);
    if (!user) {
      throw new ApiError("User not found", 422);
    }
    return await userRepository.updateById(id, body);
  }

  public async deleteById(id: string): Promise<void> {
    const user = await userRepository.getById(id);
    if (!user) {
      throw new ApiError("User not found", 422);
    }
    await userRepository.deleteById(id);
  }
}

export const userService = new UserService();
