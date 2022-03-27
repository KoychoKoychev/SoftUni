const { Schema, model, Types: { ObjectId } } = require("mongoose");

const userSchema = new Schema({
    username: { type: String, minLength: [4, "Username must be atleast 4 characters long"] },
    hashedPassword: { type: String, required: true },
    address: { type: String, minLength: [20, "Adress must be atleast 20 characters long"] },
    publications: { type: [ObjectId], ref: 'Publication', default: [] },
    sharedPubs: { type: [ObjectId], ref: 'Publication', default: [] },
});

userSchema.index({ username: 1 }, {
    unique: true,
    collation: {
        locale: "en",
        strength: 2
    }
});

const User = model("User", userSchema);

module.exports = User;