const axios = require("axios");
const fs = require('fs');

const cat = (path) => {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.error("ERROR: ", err);
            process.exit(1);
        }
        console.log(data);
    })
};

const webCat = (url) => {
    axios.get(url)
        .then(html => console.log(html))
        .catch(err => {
            console.error("ERR:", err);
            process.exit(1);
        })
};

const arg = process.argv[2];
arg.includes('http') ? webCat(arg): cat(arg);
