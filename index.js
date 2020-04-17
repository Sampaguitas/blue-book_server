const express = require("express");
const bodyParser = require('body-parser');
const glob = require('glob');
const _ = require('lodash');
const fs = require('fs');
const app = express();

//bodyParser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const { WebhookClient } = require("dialogflow-fulfillment");

app.post("/dialogflow", express.json(), (req, res) => {
    const agent = new WebhookClient({ request: req, response: res });
    let intentMap = new Map();
    intentMap.set("Jason", jason);
    intentMap.set("Weight", weight);
    intentMap.set("Default Fallback", defaultFallback);
    agent.handleRequest(intentMap);
});

function jason(agent) {
    agent.add('Jason is a nice guy but he does not know shit about programing!')
}

function weight(agent) {
    agent.add('the weight of a 6-inch pipe schedule 40 is 28.26 kilograms')
}

function defaultFallback(agent) {
    agent.add('sorry what did you just said?')
}


module.exports = { jason: jason, weight, weight, defaultFallback: defaultFallback };


// Listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));

// Compile all routers   
var routeFolders = [],     
routePaths = "./routes"   
glob.sync('**/*', { cwd: routePaths }).forEach(route => {     
    var _isFolder = !_.endsWith(route, '.js')     
    route = '/' + route.replace(/\.[^/.]+$/, '')     
    if (!_.endsWith(route, 'index')) {       
        var _router = require(routePaths + route)       
        app.use(route, _router)       
        if (_isFolder) routeFolders.push(route)     }   })   
        routeFolders.forEach(route => {     var _pathDeindex = routePaths + route + '/deindex.js'     
        if (fs.existsSync(_pathDeindex))       
        app.use(route, require(_pathDeindex))   
    })