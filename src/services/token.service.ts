import * as jwt from "jsonwebtoken";
import { Types } from "mongoose";

import { configs } from "../configs/config";

export interface ITokenPayload {
  userId: Types.ObjectId;
}

export interface ITokensPair {
  accessToken: string;
  refreshToken: string;
}

class TokenService {
  public generateTokenPair(payload: ITokenPayload): ITokensPair {
    const accessToken = jwt.sign(payload, configs.JWT_ACCESS_SECRET, {
      expiresIn: "4h",
    });
    const refreshToken = jwt.sign(payload, configs.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}

export const tokenService = new TokenService();
