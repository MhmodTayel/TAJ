import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { login, register } from "../controllers/users";
import { auth } from "../plugins/auth";

export default async (fastify: FastifyInstance) => {
  fastify.route({
    method: "POST",
    schema: {
      body: { $ref: "citizen#" },
    },
    url: "/citizen",
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const { body: userData } = request as any;

      const res = await register(userData, "citizen");
      return res;
    },
  });

  fastify.route({
    method: "POST",
    schema: {
      body: { $ref: "pharmacist#" },
    },
    url: "/pharmacist",
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const { body: userData } = request as any;

      const res = await register(userData, "pharmacist");
      return res;
    },
  });

  fastify.route({
    method: "POST",
    schema: {
      body: { $ref: "user#" },
      response: {
        200: {
          $ref: "login#",
        },
        401: {
          $ref: "login#",
        },
      },
    },
    url: "/citizen/login",
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const { body: userData } = request as any;
      try {
        const token = await login(userData, "citizen");
        reply.code(200).send({
          success: true,
          token,
          msg: "login successfully",
          statusCode: 200,
        });
      } catch (error) {
        reply.code(401).send({
          success: false,
          token: null,
          msg: error,
          statusCode: 401,
        });
      }
    },
  });

  fastify.route({
    method: "POST",
    schema: {
      body: { $ref: "user#" },
      response: {
        200: {
          $ref: "login#",
        },
        401: {
          $ref: "login#",
        },
      },
    },
    url: "/pharmacist/login",
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const { body: userData } = request as any;
      try {
        const token = await login(userData, "pharmacist");
        reply.code(200).send({
          success: true,
          token,
          msg: "login successfully",
          statusCode: 200,
        });
      } catch (error) {
        reply.code(401).send({
          success: false,
          token: null,
          msg: error,
          statusCode: 401,
        });
      }
    },
  });
};
