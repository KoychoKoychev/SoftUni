const { Schema, model, Types: { ObjectId } } = require("mongoose");

const URL_PATTERN = /^https?:\/\//;

const offerSchema = new Schema({
    name: { type: String, minLength: [6, 'Name must be at least 6 characters long.'] },
    year: { type: Number, min: [1850, 'House must be built afer 1850.'], max: [2021, 'House must be built before 2021.'] },
    type: { type: String, enum: { values: ['Apartment', 'Villa', 'House'], message: 'Type must be Apartment, Villa or House' } },
    city: { type: String, minLength: [4, 'City must be at least 4 characters long.'] },
    image: {
        type: String, validate: {
            validator(value) {
                return URL_PATTERN.test(value)
            },
            message: 'Image url must be valid.'
        }
    },
    description: { type: String, minLength: [60, 'Description must be at least 60 characters long.'] },
    available: { type: Number, min: [1, 'Available pieces must be more than 0'], max: [10, 'Available pieces must be less than 10'] },
    renters: { type: [ObjectId], ref: "User", default: [] },
    owner: { type: ObjectId, ref: "User", required: true }
})

const Offer = model('Offer',offerSchema);

module.exports = Offer;