const fetch = require('node-fetch');

module.exports = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => console.log(json))
        resolve(json);
    });
};