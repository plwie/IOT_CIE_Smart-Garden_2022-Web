express = require('express');
const router = express.Router();

// import controllers
const {getTest} = require("/Users/phaotongpongpamorn/Documents/GitHub/IOT_CIE_Smart-Garden_2022-Web/client/src/App.jsx");

// import middlewares

// api routes
router.get('/test', getTest)

module.exports = router