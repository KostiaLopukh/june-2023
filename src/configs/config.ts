import { config } from "dotenv";
config();

export const configs = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT,
};
