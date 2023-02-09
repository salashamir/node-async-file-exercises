const axios = require("axios");
const process = require("process");
const fs = require('fs');

const handleDestination = (text, dest) => {
    if(dest){
        fs.writeFile(dest, text, 'utf8', err => {
            if(err){
                console.error(`Error in writing to ${dest}:`, err);
                process.exit(1);
            } else {
                console.log("File successfully written to destination!");
            }
        })
    } else {
        console.log(text);
    }
};

const cat = (path, dest=undefined) => {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.error("ERROR: ", err);
            process.exit(1);
        } else {
            handleDestination(data, dest);
        }
    })
};

const webCat = (ur, dest=undefined) => {
    axios.get(url)
        .then(html => handleDestination(html, dest))
        .catch(err => {
            console.error(`Error fetching from ${url}: `, err);
            process.exit(1);
        })
};

let path;
let dest;

if(process.argv[2] === '--out'){
    dest = process.argv[3];
    path = process.argv[4];
} else {
    path = process.argv[2];
    dest = undefined;
}

if (path.slice(0,4) === "http"){
    webCat(path, dest);
} else {
    cat(path, dest);
}