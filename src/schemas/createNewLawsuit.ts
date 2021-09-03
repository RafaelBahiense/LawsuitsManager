import joi from "joi";

export default joi.object({
  clientId: joi.number().min(1).required(),
  stateId: joi.number().min(1).required(),
  number: joi.string().min(11).required(),
  value: joi.number().required(),
  created_at: joi.string().min(10).required(),
  status: joi.boolean().required(),
});
