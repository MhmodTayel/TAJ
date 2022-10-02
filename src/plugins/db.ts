import { FastifyInstance, FastifyLoggerInstance } from "fastify";
import mongoose from "mongoose";
import config from "../config";

const {
  DB_URI,
  MAX_POOL_SIZE,
  SERVER_SELECTION_TIMEOUT,
  DB_SOCKET_TIMEOUT,
  DB_IP_VERSION,
} = config;

const options = {
  autoIndex: false,
  maxPoolSize: MAX_POOL_SIZE,
  serverSelectionTimeoutMS: SERVER_SELECTION_TIMEOUT,
  socketTimeoutMS: DB_SOCKET_TIMEOUT,
  family: DB_IP_VERSION,
};

async function dbConnector(fastify: FastifyInstance) {
  try {
    await mongoose.connect(DB_URI, options);
    fastify.log.debug("Connected to MongoDB successfully");
    mongoose.connection.on("disconnected", () => {
      fastify.log.error("lost connection to MongoDB");
    });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

export default dbConnector;
