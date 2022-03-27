const User = require("../models/User");
const { hash, compare } = require("bcrypt");

async function register(name, username, password) {
    const existing = await getUserByUsername(username);
    if (existing) {
        throw new Error("Username already taken");
    }
    const hashedPassword = await hash(password, 10);
    const user = new User({
        name,
        username,
        hashedPassword
    });
    await user.save();
    return user;
}


async function login(username, password) {
    const user = await getUserByUsername(username);
    if (!user) {
        throw new Error("User does not exist");
    }
    const hasMatch = await compare(password, user.hashedPassword);
    if (!hasMatch) {
        throw new Error("Wrong password");
    }
    return user;
}

async function getUserByUsername(username) {
    return await User.findOne({ username: new RegExp(`^${username}$`, 'i') });
}


module.exports = {
    register,
    login
}