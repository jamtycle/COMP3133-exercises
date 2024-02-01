const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        minlength: 4,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/,
            "Email failed validation",
        ],
    },
    address: {
        street: {
            type: String,
            required: true,
        },
        suite: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
            match: /^[A-Za-z\s]+$/,
        },
        zipcode: {
            type: String,
            required: true,
            match: /^\d{5}-\d{4}$/,
        },
        geo: {
            lat: {
                type: String,
                required: true,
            },
            lng: {
                type: String,
                required: true,
            },
        },
    },
    phone: {
        type: String,
        required: true,
        match: /^1-\d{3}-\d{3}-\d{4}$/,
    },
    website: {
        type: String,
        required: true,
        match: /^(http|https):\/\/[^ "]+$/,
    },
    company: {
        name: {
            type: String,
            required: true,
        },
        catchPhrase: {
            type: String,
            required: true,
        },
        bs: {
            type: String,
            required: true,
        },
    },
});

const User = mongoose.model("user", userSchema);

const data_path = path.join(__dirname, "..", "UsersData.json");
fs.readFile(data_path, (ex, data) => {
    if (ex) throw ex;

    const jsonData = JSON.parse(data.toString());
    User.deleteMany({})
        .then(() => {
            User.insertMany(jsonData)
                .then(() => {
                    console.log("=== users data inserted ===");
                })
                .catch((ex) => console.error(ex));
        })
        .catch((ex) => console.error(ex));
});

module.exports = {
    User,
};
