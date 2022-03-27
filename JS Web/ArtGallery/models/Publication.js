const { Schema, model, Types: { ObjectId } } = require("mongoose");

const URL_PATTERN = /^https?:\/\//;

const publicationSchema = new Schema({
    title: { type: String, minLength: [6, "The title must be at least 6 characters long."]},
    tech: { type: String, minLength: [15, 'Painting technique should be at least 15 characters long']},
    certificate: { type: String, enum: { values: ['Yes', 'No'], message: 'Should only specify Yes or No' } },
    picture: {
        type: String, validate: {
            validator(value) {
                return URL_PATTERN.test(value);
            },
            message: "The image must have a valid URL."
        }
    },
    author: { type: ObjectId, ref: 'User', required: true },
    shares: { type: [ObjectId], ref: 'User', default: [] }
})

const Publication = model('Publication', publicationSchema);

module.exports = Publication;