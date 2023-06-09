import { Schema, model } from "mongoose";
import joi from "joi";
export interface UserI {
  _id: Schema.Types.ObjectId;
  email: string;
  password?: string;
  username: string;
  phone: string;
  image?: string;
  role: string;
  createAt: Date;
}
export const validateUserFields = (payload: UserI) => {
  let userSch = joi.object({
    email: joi.string().email().required(),
    password: joi.string().alter({
      post: (schema: any) => schema.required(),
      put: (schema: any) => schema.optional(),
    }),
    username: joi.string().required(),
    phone: joi.string().required(),
    image: joi.string().min(0).allow("").optional(),
  });
  return userSch.validate(payload);
};

const userSchema = new Schema<UserI>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "user",
    enum: ["user", "superAdmin", "subAdmin"],
  },
  image: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export const User = model("user", userSchema);
