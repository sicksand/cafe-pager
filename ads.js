import websites from "./website.json" assert { type : "json" };
//import data from "./data.json" assert { type: "json" };
//console.log(websites);
//const websites = require('./website.json');

const randomIndex = Math.floor(Math.random() * websites.length);

const randomWebsite = websites[randomIndex];

export { randomWebsite };
