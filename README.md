# Restaurants App
> A frontend exercise by Kefan Yang, for STIT

A live demo can be found [here](https://morning-plains-38989.herokuapp.com/), if you have any problems, feel free to contact me at ky1323@nyu.edu.

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

- On the homepage, you are able to test two features, `List Restaurants Nearby` and `Search Restaurants by Name`
- The `Explore Restaurants Near Me` button will direct to the list restaurant page
- Enter the restaurant name you want to search and click `search`, the app will search for the restaurants with the name you want in the nearby restaurants
<img src="/public/Images/homepage-example.png">