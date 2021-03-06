// init express app
const express = require('express');
const app = express();

// packages
const axios = require("axios");
const bodyParser = require("body-parser");

// .env config
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const ZOMATO_USER_KEY = process.env.ZOMATO_USER_KEY;
const GOOGLE_MAP_KEY = process.env.GOOGLE_MAP_KEY;

// app seetings
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

// setup axios
const request = axios.create({
    headers: {
        'user-key': ZOMATO_USER_KEY
    }
});

app.get('/', (req, res) => {
    res.render('index');
});

// route for list restaurants & show search results
app.get('/restaurants', (req, res) => {
    const {
        latitude,
        longitude,
        name
    } = req.query;

    let url;
    if (latitude && longitude) {
        // use user's location
        url = `https://developers.zomato.com/api/v2.1/search?lat=${latitude}&lon=${longitude}`;
    } else {
        // no location input, use new york for default
        url = `https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city`;
    }

    // We have two possible methods to implement search by name, 
    // first is just filter from the current nearby restaurants by restaurant name,
    // second is call the api with the keyword parameter q,
    // we will implement both of them

    // Method 1
    // if (name) {
    //     url += "&count=100"
    // }

    // Method 2
    if (name) {
        url += `&q=${name.replace('%20', ' ')}`;
    }

    // call the search api to search for restaurants nearby
    request.get(url)
        .then(response => {
            let result = response.data;
            let restaurants = {};
            if (name) {
                str = name.replace('%20', ' ');
                // Method 1
                // restaurants = result.restaurants.filter(function (entry) {
                //     return entry.restaurant.name === str
                // }).slice(0, 20);

                // Method 2
                restaurants = result.restaurants;
            } else {
                restaurants = result.restaurants;
            }
            // console.log(result);
            res.render('Restaurant/list', {
                restaurants: restaurants,
                map_key: GOOGLE_MAP_KEY,
                lat: latitude ? latitude : "40.7223277778",
                lon: longitude ? longitude : "-73.9873500000",
                hasPosition: latitude ? "true" : "false"
            });
        })
        .catch(err => {
            return console.log(err)
        })
    // res.render('Restaurant/list')
});

app.get('/restaurant/:id', (req, res) => {
    const restaurantID = req.params.id;
    request.get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurantID}`)
        .then(response => {
            res.render('Restaurant/show', {
                restaurant: response.data
            })
            // console.log(response)
        })
        .catch(err => console.log(err));
});

app.listen(PORT, function () {
    console.log(`Restaurants app listen on port ${PORT}`)
});