import dotenv from "dotenv";

const { NODE_ENV } = process.env;

const envPath = NODE_ENV === "test" ? ".env.test" : ".env";

dotenv.config({ path: envPath });
