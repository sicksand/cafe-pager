import websites from "./website.json";
//const websites = require('./website.json');

const randomIndex = Math.floor(Math.random() * websites.length);

const randomWebsite = websites[randomIndex];

export { randomWebsite };
