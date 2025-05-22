import * as Joi from "joi";

export const userValidator = Joi.object({
    username:Joi.string().pattern(/\w{4,}/).required().messages({
        "string.pattern.base":"name must have at least 4 characters"
    }),
    password:Joi.string().min(3).max(6).required().messages({
        "string.min":"pass must have at least 3 characters",
        "string.max":"pass must have at max 6 characters",
    }),
    age:Joi.number().min(18).required().messages({
        "number.min":"age must be bigger than 18",
    })
})