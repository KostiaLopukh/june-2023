import { Types } from "mongoose";

import { ITokensPair } from "../services/token.service";

export interface IToken extends ITokensPair {
  _userId: Types.ObjectId;
}
