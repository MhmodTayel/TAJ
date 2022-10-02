import { FastifyRequest } from "fastify";
import { FastifyReply } from "fastify";

export const auth = async function (
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.send(err);
  }
};
