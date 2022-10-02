require("dotenv").config();
import fastify, { FastifyReply, FastifyRequest } from "fastify";
import fastifySwagger, { SwaggerOptions } from "@fastify/swagger";
import jwt from "@fastify/jwt";
import swagger from "./swagger";
import signRoutes from "./routes/users";
import db from "./plugins/db";
import config from "./config";
import { Citizen, Pharmacist, User } from "./schemas/User";
import { auth } from "./plugins/auth";

export const server = fastify({
  pluginTimeout: config.FASTIFY_PLUGIN_TIMEOUT,
  ajv: {
    customOptions: {
      allErrors: true,
      $data: true,
      coerceTypes: true,
      removeAdditional: true,
    },
  },
  logger: {
    level: config.LOG_LEVEL,
    file: config.LOG_FILE,
    transport: {
      target: "pino-pretty",
    },
  },
});

server.addSchema(Citizen);
server.addSchema(Pharmacist);
server.addSchema(User);
server.register(db);

server.register(jwt, {
  secret: config.SECRET_KEY,
});

server.register(fastifySwagger, swagger as SwaggerOptions);
server.register(signRoutes, { prefix: "users" });

server.listen(config.PORT, "localhost", (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  } else {
    server.log.info(`server listening on: ${address}`);
  }
});
