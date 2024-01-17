import { ApiError } from "../errors/api.error";
import { tokenRepository } from "../repositories/token.repository";
import { userRepository } from "../repositories/user.repository";
import { ILogin } from "../types/auth.type";
import { IUser } from "../types/user.type";
import { passwordService } from "./password.service";
import { ITokensPair, tokenService } from "./token.service";

class AuthService {
  public async signUp(dto: Partial<IUser>): Promise<IUser> {
    const hashedPassword = await passwordService.hash(dto.password);
    return await userRepository.create({ ...dto, password: hashedPassword });
  }

  public async signIn(dto: ILogin): Promise<ITokensPair> {
    const user = await userRepository.getOneByParams({ email: dto.email });
    if (!user) throw new ApiError("Not valid email or password", 401);

    const isMatch = await passwordService.compare(dto.password, user.password);
    if (!isMatch) throw new ApiError("Not valid email or password", 401);

    const jwtTokens = tokenService.generateTokenPair({ userId: user._id });
    await tokenRepository.create({ ...jwtTokens, _userId: user._id });

    return jwtTokens;
  }
}

export const authService = new AuthService();
