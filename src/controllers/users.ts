import CitizenModel from "../models/citizen";
import PharmacistModel from "../models/pharmacist";
import { server } from "../index";

interface User {
  username: string;
  password: string;
}

export const register = async (userData: User, type: string) => {
  const userModel =
    type == "citizen"
      ? await CitizenModel.create(userData)
      : await PharmacistModel.create(userData);

  return userModel;
};

export const login = async ({ username, password }: User, type: string) => {
  const user =
    type == "citizen"
      ? await CitizenModel.findOne({ username })
      : await PharmacistModel.findOne({ username });

  if (!user) throw "user is invalid";

  const isVaild = await user?.comparePassword(password);

  if (!isVaild) throw "Wrong password";

  const token = server.jwt.sign({
    username,
    _id: user?._id,
    maxAge: "2d",
  });
  return token;
};
