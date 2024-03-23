import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

export const userSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    token: { type: String, default: "" },
    avatarURL: { type: String },
  },
  { versionKey: false }
);

userSchema.methods.hashPassword = async function () {
  this.password = await bcryptjs.hash(this.password, 10);
};

export const User = model("users", userSchema);
