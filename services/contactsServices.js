import { Contact } from "../db/modals/contactModal.js";

export const getAll = async () => {
  const respons = await Contact.find();
  return respons;
};

export const createContact = async (data) => {
  const isContactExist = await Contact.findOne({ number: data.number });

  if (isContactExist) {
    return {
      error: {
        message: "Contact with this number is already exist",
      },
    };
  }

  const response = await Contact.create({ ...data });
  return response;
};

export const removeContact = async (id) => {
  const response = await Contact.findByIdAndDelete(id);
  return response;
};

export const updateContact = async (id, data) => {
  const updatedContact = await Contact.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedContact;
};
