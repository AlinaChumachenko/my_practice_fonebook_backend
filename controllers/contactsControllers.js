import {
  getAll,
  createContact,
  removeContact,
  updateContact,
} from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res, next) => {
  try {
    const result = await getAll(req.user._id);
    res.json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const addContact = async (req, res, next) => {
  try {
    const result = await createContact(req.body, req.user._id);
    if (result.error) {
      throw HttpError(400, result.error.message);
    }
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const { contactID } = req.params;
    const result = await removeContact(contactID, req.user._id);

    if (!result) {
      throw HttpError(404, `Contact with id ${contactID} is not found`);
    }

    res.json({ message: "Contact deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const renewContact = async (req, res, next) => {
  try {
    const contact = await updateContact(
      req.params.contactID,
      req.body,
      req.user._id
    );

    if (!contact) {
      throw HttpError(
        404,
        `Contact with id ${req.params.contactID} is not found`
      );
    }
    return res.json(contact);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
