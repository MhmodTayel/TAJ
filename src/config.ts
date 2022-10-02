import { cleanEnv, str, num } from "envalid";

const env = cleanEnv(process.env, {
  PORT: num({ default: 3000 }),
  LOG_FILE: str({ default: undefined }),
  FASTIFY_PLUGIN_TIMEOUT: num({ default: 60000 }),
  LOG_LEVEL: str({
    choices: ["info", "error", "debug", "fatal", "warn"],
    default: "info",
  }),
  DB_URI: str({default:'mongodb://localhost:27017/taj'}),
  SECRET_KEY: str({ default: "fpiDD)33FH&%#^$**Vc#NV" }),
  MAX_POOL_SIZE: num({ default: 100 }),
  SERVER_SELECTION_TIMEOUT: num({ default: 5000 }),
  DB_SOCKET_TIMEOUT: num({ default: 45000 }),
  DB_IP_VERSION: num({ default: 4 }),
});

export default env;
