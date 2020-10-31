const express = require("express")
const app = express();

const keys = require('./keys');


const redis = require('redis');
const client = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000,
});







var CronJob = require('cron').CronJob;
var job = new CronJob('0/5 * * * * *', function () {

    client.get("names2", function (err, reply) {
        console.log(reply)

        // reply is null when the key is missing
        let list
        if (reply == null) {
            list = []
        } else {
            list = JSON.parse(reply)
        }
        const newlist = list.filter((v, i, a) => a.indexOf(v) == i)


        client.set("names2", JSON.stringify(newlist));


    });


    // console.log('You will see this message every second');




}, null, true, 'America/Los_Angeles');
job.start();



app.listen(3055, () => console.log("listen on port 3055"))