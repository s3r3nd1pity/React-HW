import Joi from "joi";
import {number, string} from "joi";

export const carValidator = Joi.object({
    brand: string().pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$/).max(20).min(1).required().messages({
        "string.pattern.base": "You can use only letters",
        "string.min": "You must to have at least 1 character",
        "string.max": "You must to have at maximum 20 characters",
    }),
    price: number().min(0).max(1000000).required().messages({
        "number.min": "The minimum price is 0",
        "number.max": "The maximum price is 1000000",
    }),
    year: number().min(1990).max(2024).required().messages({
        "number.min": "The minimum year is 1990",
        "number.max": "The maximum year is 2024",
    }),
})