import { config } from "dotenv";
import env from "env-var";

config();

export const envs = {
  PORT: env.get('PORT').required().asPortNumber(),
  MONGO_URL: env.get('MONGO_URL').required().asString(),
  DB_NAME: env.get('MONGO_DB_NAME').required().asString(),
}
