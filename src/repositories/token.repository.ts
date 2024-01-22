import { Token } from "../models/token.model";
import { IToken } from "../types/token.type";

class TokenRepository {
  public async create(data: Partial<IToken>) {
    return await Token.create(data);
  }

  public async getOneBy(params: Partial<IToken>): Promise<IToken> {
    return await Token.findOne(params);
  }

  public async deleteOneByParams(params: Partial<IToken>): Promise<void> {
    await Token.deleteOne(params);
  }
}

export const tokenRepository = new TokenRepository();
