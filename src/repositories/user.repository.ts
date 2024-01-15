import { read } from "../fs.service";
import { IUser } from "../interfaces/user.interface";

class UserRepository {
  public async getAll(): Promise<IUser[]> {
    const users = await read();
    return users;
  }
}

export const userRepository = new UserRepository();
