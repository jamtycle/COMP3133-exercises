const express = require("express");
const bodyParser = require("body-parser");
const { mongoInit } = require("./data/mongoinit");

const RestaurantAPI = require("./routes/RestaurantAPI");

const main = async () => {
    const db = await mongoInit();
    if (!db) {
        console.error("Error connecting to MongoDB");
        process.exit(1);
    }

    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use("/api", RestaurantAPI);
    app.get("/", (_req, res) => {
        res.send("Welcome to the Restaurant API");
    });

    app.listen(3000, () => {
        console.log("Server started on port 3000");
    });
};

main();
