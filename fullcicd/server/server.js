const express = require("express")
const app = express();
const cors = require("cors")
const keys = require('./keys');
var bodyParser = require('body-parser')

const redis = require('redis');
const client = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000,
});



const workerData = [

    {
        day: "sunday",
        enterHouser: 12,
        exithouer: 16,
        doration: 6
    },
    {
        day: "monday",

        enterHouser: 15,
        exithouer: 20,
        doration: 7
    },
    {
        day: "tuesday",

        enterHouser: 12,
        exithouer: 15,
        doration: 5
    }, {
        day: "Wednesday",

        enterHouser: 12,
        exithouer: 25,
        doration: 10
    }
]

app.use(cors())
app.use(bodyParser.json())

app.get('/workerHouers*', (req, res) => {
    // console.log(req.headers)
    console.log(req.query)
    console.log(workerData)

    res.send(workerData)
})

app.post('/addName', (req, res) => {
    // console.log(req.headers)
    client.get("names2", function (err, reply) {
        console.log(reply)

        // reply is null when the key is missing
        let list
        if (reply == null) {
            list = []
        } else {
            list = JSON.parse(reply)
        }
        console.log(list)
        list.push(req.body.name)
        client.set("names2", JSON.stringify(list));
        res.send(JSON.stringify(reply))

    });
})


app.get('/names', (req, res) => {
    // console.log(req.headers)
    client.get("names2", function (err, reply) {


        res.send(reply)


    });

})

app.listen(5000, () => console.log("listen on port 5000"))