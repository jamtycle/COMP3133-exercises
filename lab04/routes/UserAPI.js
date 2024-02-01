const express = require("express");
const { User } = require("../data/UserSchema");

const UserAPI = express.Router();

UserAPI.post("/users", async (req, res) => {
    if (!req.body) return res.sendStatus(400);

    try {
        await new User(req.body).save();
        return res.sendStatus(201);
    } catch (ex) {
        console.error(ex);
        return res.sendStatus(500);
    }
});

module.exports = UserAPI;
