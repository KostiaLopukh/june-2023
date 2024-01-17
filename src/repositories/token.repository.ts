import { Token } from "../models/token.model";
import { IToken } from "../types/token.type";

class TokenRepository {
  public async create(data: Partial<IToken>) {
    return await Token.create(data);
  }
}

export const tokenRepository = new TokenRepository();
