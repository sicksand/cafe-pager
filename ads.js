const websites = require('./websites.json');

const randomIndex = Math.floor(Math.random() * websites.length);

const randomWebsite = websites[randomIndex];

document.getElementById('random-website').innerHTML = randomWebsite;