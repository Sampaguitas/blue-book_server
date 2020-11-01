const { WebhookClient } = require("dialogflow-fulfillment");
const express = require("express");
const mongoose = require('mongoose');
// const _ = require('lodash');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
// fs = require('fs');

app
.use(cors())
.use(bodyParser.urlencoded({extended:false}))
.use(bodyParser.json());

mongoose
.set('useFindAndModify', false)
.connect(require('./config/keys').mongoURI,{useNewUrlParser:true, useUnifiedTopology: true})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.post("/dialogflow", express.json(), (req, res) => {
    const agent = new WebhookClient({ request: req, response: res });
    let intentMap = new Map();
    
    intentMap.set('dimensions_elbow - BW - 45 - Sch', require('./routes/dimensionsElbowBw45Sch'));
    intentMap.set('dimensions_elbow - BW - 90 - SR - Sch', require('./routes/dimensionsElbowBw90SrSch'));
    intentMap.set('dimensions_elbow - BW - 90 - LR - Sch', require('./routes/dimensionsElbowBw90LrSch'));
    intentMap.set('dimensions_elbow - F - 45 - SW - 3000', require('./routes/dimensionsElbow45Sw3000'));
    intentMap.set('dimensions_elbow - F - 45 - SW - 6000', require('./routes/dimensionsElbow45Sw6000'));
    intentMap.set('dimensions_elbow - F - 45 - SW - 9000', require('./routes/dimensionsElbow45Sw9000'));
    intentMap.set('dimensions_elbow - F - 90 - SW - 3000', require('./routes/dimensionsElbow90Sw3000'));
    intentMap.set('dimensions_elbow - F - 90 - SW - 6000', require('./routes/dimensionsElbow90Sw6000'));
    intentMap.set('dimensions_elbow - F - 90 - SW - 9000', require('./routes/dimensionsElbow90Sw9000'));
    intentMap.set('dimensions_elbow - F - 45 - NPT - 2000', require('./routes/dimensionsElbow45Npt2000'));
    intentMap.set('dimensions_elbow - F - 45 - NPT - 3000', require('./routes/dimensionsElbow45Npt3000'));
    intentMap.set('dimensions_elbow - F - 45 - NPT - 6000', require('./routes/dimensionsElbow45Npt6000'));
    intentMap.set('dimensions_elbow - F - 90 - NPT - 2000', require('./routes/dimensionsElbow90Npt2000'));
    intentMap.set('dimensions_elbow - F - 90 - NPT - 3000', require('./routes/dimensionsElbow90Npt3000'));
    intentMap.set('dimensions_elbow - F - 90 - NPT - 6000', require('./routes/dimensionsElbow90Npt6000'));
    
    agent.handleRequest(intentMap);
});

app.listen(process.env.PORT || 5000, () => console.log(`Server running on ${process.env.PORT || 5000}`));
