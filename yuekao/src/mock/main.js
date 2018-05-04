var page1 = require('./data/page1.json');
var mockapi = {
    '/api/page1_main': page1
};
module.exports = function(url) {
    return mockapi[url];
};