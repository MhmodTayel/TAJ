export const Citizen = {
  type: "object",
  $id: "citizen",
  additionalProperties: false,
  required: ["username", "password", "name", "age", "gender"],
  properties: {
    username: {
      type: "string",
      description: "citizen valid mobile number",
      pattern: "^01[0125][0-9]{8}$",
    },
    password: {
      type: "string",
      description:
        "password Minimum eight characters, at least one letter, one number and one special character:",
      pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$",
    },
    name: {
      type: "string",
    },
    age: {
      type: "number",
      minimum: 15,
      maximum: 80,
    },
    gender: {
      type: "string",
      enum: ["male", "female"],
    },
    weight: {
      type: "number",
      minimum: 30,
      maximum: 300,
    },
    height: {
      type: "number",
      minimum: 100,
      maximum: 300,
    },
    medicines: {
      type: "array",
      items: {
        type: "string",
      },
    },
    diseases: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
};

export const Pharmacist = {
  type: "object",
  $id: "pharmacist",
  additionalProperties: false,
  required: [
    "username",
    "email",
    "password",
    "name",
    "graduationYear",
    "age",
    "faculty",
    "university",
  ],
  properties: {
    username: {
      type: "string",
      description: "citizen valid mobile number",
      pattern: "^01[0125][0-9]{8}$",
    },
    name: {
      type: "string",
      description: "citizen name",
    },
    email: {
      type: "string",
      pattern: "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$",
    },
    password: {
      type: "string",
      description:
        "password Minimum eight characters, at least one letter, one number and one special character:",
      pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$",
    },

    age: {
      type: "number",
      minimum: 15,
      maximum: 80,
    },
    graduationYear: {
      type: "number",
      minimum: 1990,
      maximum: 2025,
    },
    university: {
      type: "string",
    },
    faculty: {
      type: "string",
    },
    lastYearGrade: {
      type: "number",
    },
    photo: {
      type: "string",
    },
  },
};

export const User = {
  type: "object",
  $id: "user",
  additionalProperties: false,
  required: ["username", "password"],
  properties: {
    username: {
      type: "string",
      description: "citizen valid mobile number",
      pattern: "^01[0125][0-9]{8}$",
    },
    password: {
      type: "string",
      description:
        "password Minimum eight characters, at least one letter, one number and one special character:",
      pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$",
    },
  },
};
