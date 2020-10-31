const chokidar = require('chokidar');
const fs = require("fs");
const { Console } = require('console');
// One-liner for current directory



chokidar.watch('test', {
    // ignoreInitial: true,
    ignored: /[^A-Za-z0-9  and \/ ]+/, // ignore dotfiles




}).on('all', (event, path) => {
    console.log(event, path);
    try {
        // const file = fs.readdirSync(`${path}`)[0]
        // console.log(file)

        // const json = JSON.stringify(fs.readFileSync(`${path}/${file}`, "utf8"))
        // console.log(json)
    } catch (error) {

    }



});