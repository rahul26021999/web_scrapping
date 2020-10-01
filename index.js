const scrape = require('website-scraper');
const websiteUrl = 'https://jnu.ac.in/vlsi2018/';

scrape({
    urls: [websiteUrl],
    urlFilter: function(url) {
        return url.indexOf(websiteUrl) === 0;
    },
    recursive: true,
    maxDepth: 500,
    prettifyUrls: true,
    filenameGenerator: 'bySiteStructure',
    directory: './jnuwebsite'
}).then((data) => {
    console.log("Entire website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});
