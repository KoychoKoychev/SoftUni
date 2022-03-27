const { Schema, model, Types: { ObjectId } } = require("mongoose");

const EMAIL_PATTERN = /^.+@.+$/;

const userSchema = new Schema({
    email: {
        type: String, required: true, validate: {
            validator(value) {
                return EMAIL_PATTERN.test(value);
            },
            message: "Your email must be valid"
        }
    },
    hashedPassword: { type: String, required: true },
    gender: { type: String, required: true },
    tripsHistory: { type: [ObjectId], ref: "Trip", default: [] }
});

userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: "en",
        strength: 2
    }
});

const User = model("User", userSchema);

module.exports = User;