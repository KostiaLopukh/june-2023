import { IUser } from "../types/user.type";

export class UserPresenter {
  public static userToResponse(user: IUser) {
    return {
      name: user.name,
      email: user.email,
      age: user.age,
      isVerified: user.isVerified,
      role: user.role,
      phone: user.phone,
      createdAt: user.createdAt,
    };
  }
}
