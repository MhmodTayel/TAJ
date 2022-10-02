import { server } from "..";

export const login = {
  type: "object",
  properties: {
    success: { type: "boolean" },
    token: { type: "string" },
    msg: { type: "string" },
    statusCode: { type: "number" },
  },
};

server.addSchema(login);
