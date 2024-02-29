import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.requaired": "Name filed is requaired",
  }),
  number: Joi.string().required().messages({
    "any.requaired": "Number filed is requaired",
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string(),
  number: Joi.string(),
});
