
export const Login = {
  $id:"login",
  type: "object",
  properties: {
    success: { type: "boolean" },
    token: { type: "string" },
    msg: { type: "string" },
    statusCode: { type: "number" },
  },
};

