import express from "express";
import {
  getAllContacts,
  addContact,
  deleteContact,
  renewContact,
} from "../controllers/contactsControllers.js";
import validateBody from "../helpers/validateBody.js";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";
import { isValidId } from "../middlewares/isValidid.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.post("/", validateBody(createContactSchema), addContact);

contactsRouter.put(
  "/:contactID",
  isValidId,
  validateBody(updateContactSchema),
  renewContact
);

contactsRouter.delete("/:contactID", isValidId, deleteContact);

export default contactsRouter;
