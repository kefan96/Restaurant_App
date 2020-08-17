# Restaurants App
> A frontend exercise by Kefan Yang, for STIT, build in node.js

A live demo (on heroku) can be found [here](https://morning-plains-38989.herokuapp.com/), if you have any problems, feel free to contact me at ky1323@nyu.edu.

## Development Guide

### Installation

- All the `code` required to get started

#### Clone

- Clone this repo to your local machine using `https://github.com/kefan96/Restaurant_App.git`

#### Setup

> install the dependencies first

```shell
npm install
```

> install nodemon for better experience

```shell
npm instal -g nodemon
```

> you will need to create your own `.env` file with your API credentials

```
ZOMATO_USER_KEY = [YOUR ZOMATO USER KEY]
GOOGLE_MAP_KEY = [YOUR GOOGLE MAP KEY]
```

### Run
> ready to go!
```shell
node app.js
```
or
```shell
nodemon
```

> the app will be running at `localhost:8000` without further configuration

## User Guide

> how to use the Restaurants App

### Homepage
- On the homepage, you are able to test two features, `List Restaurants Nearby` and `Search Restaurants by Name`
- The `Explore Restaurants Near Me` button will direct to the list restaurant page
- Enter the restaurant name you want to search and click `search`, the app will search for the restaurants with the name you want in the nearby restaurants
<img src="/public/Images/homepage-example.png" alt="homepage-example">

### List Restaurant Page
- The page will display the list of restaurants whether you are exploring nearby or searching for names
- You will need to enable location sharing to allow the app to get your position dynamically
- The page has a `List View` and a `Map View` section if you share your position. The `Map View` is a google map with markers indicating your position and your restaurants' position. You can click on `Map View` to go down. And if you hover on the markers, it will give you the name of the restaurants
- Every title of the restaurant card in the `List View` is clickable, it will direct you to the `Show Single Restaurant Page`
<img src="/public/Images/example-listpage.png" alt="list-restaurants-example">

### Show Single Restaurant Page
- Displays detailed information for each restaurant, including distance from you
<img src="/public/Images/showpage-example.png" alt="show-restaurant-example">

## Future Improvement
- Using Node.js to creat this app is painful, especially when passing parameters to view. I am interested in recreating this in React
- To process user's position, this app pass latitude and longitude in url query parameters, which may leads to privacy issues, maybe we will need some hash functions
- A cache can be implemented to reduce the api calls and lower the response time
- Better design and more information to display obviously
