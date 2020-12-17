const Joi = require("joi");

//Validation for adding users
const validUser = (_userObj) => {
  let schema = Joi.object({
    first_name: Joi.string().min(2).max(50).required(),
    last_name: Joi.string().min(2).max(50).required(),
    gender: Joi.string().min(2).max(50).email(),
    avatar: Joi.string().min(2).max(50).email(),
    color: Joi.string().min(2).max(50).email(),
    job: Joi.string().min(2).max(50).email()
  })
  return schema.validate(_userObj);
}
exports.validUser = validUser;

