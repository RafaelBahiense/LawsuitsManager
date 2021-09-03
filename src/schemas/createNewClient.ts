import joi from "joi";

export default joi.object({
  name: joi.string().min(3).required(),
  cnpj: joi.string().min(12).max(14).required(),
  stateId: joi.number().min(1).required(),
});
