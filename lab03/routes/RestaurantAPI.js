const express = require("express");
const { Restaurant } = require("../data/RestaurantSchema");

const RestaurantAPI = express.Router();

RestaurantAPI.get("/restaurants", async (req, res) => {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
});

RestaurantAPI.get("/restaurants/:cuisine", async (req, res) => {
    const { cuisine } = req.params;
    const restaurants = await Restaurant.find({ cuisine });
    res.json(restaurants);
});

RestaurantAPI.get("/restaurant", async (req, res) => {
    const sortBy = req.query.sortBy;
    const sortOrder = sortBy === "ASC" ? 1 : -1;
    // Project this query to return only: _id, cuisines, name, city, resturant_id
    const restaurants = await Restaurant.find()
        .sort({ restaurant_id: sortOrder })
        .select("_id cuisines name city restaurant_id");
    res.json(restaurants);
});

RestaurantAPI.get("/restaurants/Delicateseen", async (req, res) => {
    const restaurants = await Restaurant.find({
        cuisine: "Delicatessen",
        city: { $ne: "Brooklyn" },
    });
    res.json(restaurants);
});

module.exports = RestaurantAPI;
