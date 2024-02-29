import { isValidObjectId } from "mongoose";
import HttpError from "../helpers/HttpError.js";

export const isValidId = (req, res, next) => {
  const { contactID } = req.params;
  if (!isValidObjectId(contactID)) {
    next(HttpError(400, `${contactID} is not valid ID`));
  }
  next();
};
