const request = require('request');

class Api {
    static get(url) {
        request
            .get(url)
            .on('response', (res) => {
                console.log(res);
            })
    }
}

module.exports = {Api};