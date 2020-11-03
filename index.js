const { WebhookClient } = require("dialogflow-fulfillment");
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

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
    
    //dimensions_cap
    intentMap.set('dimensions_cap - F - NPT - 3000', require('./fulfillments/dimensionsCapNpt3000'));
    intentMap.set('dimensions_cap - F - NPT - 6000', require('./fulfillments/dimensionsCapNpt6000'));
    intentMap.set('dimensions_cap - F - SW - 3000', require('./fulfillments/dimensionsCapSw3000'));
    intentMap.set('dimensions_cap - F - SW - 6000', require('./fulfillments/dimensionsCapSw6000'));
    intentMap.set('dimensions_cap - F - SW - 9000', require('./fulfillments/dimensionsCapSw9000'));
    intentMap.set('dimensions_cap - BW - Sch', require('./fulfillments/dimensionsCapBwSch'));
    //dimensions_cross
    // intentMap.set('dimensions_cross - F - NPT - 2000', require('./fulfillments/dimensionsCrossNpt2000'));
    // intentMap.set('dimensions_cross - F - NPT - 3000', require('./fulfillments/dimensionsCrossNpt3000'));
    // intentMap.set('dimensions_cross - F - NPT - 6000', require('./fulfillments/dimensionsCrossNpt6000'));
    // intentMap.set('dimensions_cross - F - SW - 3000', require('./fulfillments/dimensionsCrossSw3000'));
    // intentMap.set('dimensions_cross - F - SW - 6000', require('./fulfillments/dimensionsCrossSw6000'));
    // intentMap.set('dimensions_cross - F - SW - 9000', require('./fulfillments/dimensionsCrossSw9000'));
    // intentMap.set('dimensions_cross - BW - Sch', require('./fulfillments/dimensionsCrossBwSch'));
    //dimensions_elbow
    intentMap.set('dimensions_elbow - F - 45 - NPT - 2000', require('./fulfillments/dimensionsElbow45Npt2000'));
    intentMap.set('dimensions_elbow - F - 45 - NPT - 3000', require('./fulfillments/dimensionsElbow45Npt3000'));
    intentMap.set('dimensions_elbow - F - 45 - NPT - 6000', require('./fulfillments/dimensionsElbow45Npt6000'));
    intentMap.set('dimensions_elbow - F - 45 - SW - 3000', require('./fulfillments/dimensionsElbow45Sw3000'));
    intentMap.set('dimensions_elbow - F - 45 - SW - 6000', require('./fulfillments/dimensionsElbow45Sw6000'));
    intentMap.set('dimensions_elbow - F - 45 - SW - 9000', require('./fulfillments/dimensionsElbow45Sw9000'));
    intentMap.set('dimensions_elbow - F - 90 - NPT - 2000', require('./fulfillments/dimensionsElbow90Npt2000'));
    intentMap.set('dimensions_elbow - F - 90 - NPT - 3000', require('./fulfillments/dimensionsElbow90Npt3000'));
    intentMap.set('dimensions_elbow - F - 90 - NPT - 6000', require('./fulfillments/dimensionsElbow90Npt6000'));
    intentMap.set('dimensions_elbow - F - 90 - SW - 3000', require('./fulfillments/dimensionsElbow90Sw3000'));
    intentMap.set('dimensions_elbow - F - 90 - SW - 6000', require('./fulfillments/dimensionsElbow90Sw6000'));
    intentMap.set('dimensions_elbow - F - 90 - SW - 9000', require('./fulfillments/dimensionsElbow90Sw9000'));
    intentMap.set('dimensions_elbow - BW - 45 - Sch', require('./fulfillments/dimensionsElbowBw45Sch'));
    intentMap.set('dimensions_elbow - BW - 90 - LR - Sch', require('./fulfillments/dimensionsElbowBw90LrSch'));
    intentMap.set('dimensions_elbow - BW - 90 - SR - Sch', require('./fulfillments/dimensionsElbowBw90SrSch'));
    //dimensions_return
    intentMap.set('dimensions_return - LR - Sch', require('./fulfillments/dimensionsReturnLrSch'));
    intentMap.set('dimensions_return - SR - Sch', require('./fulfillments/dimensionsReturnSrSch'));
    //dimensions_tee
    // intentMap.set('dimensions_tee - F - NPT - 2000', require('./fulfillments/dimensionsTeeNpt2000'));
    // intentMap.set('dimensions_tee - F - NPT - 3000', require('./fulfillments/dimensionsTeeNpt3000'));
    // intentMap.set('dimensions_tee - F - NPT - 6000', require('./fulfillments/dimensionsTeeNpt6000'));
    // intentMap.set('dimensions_tee - F - SW - 3000', require('./fulfillments/dimensionsTeeSw3000'));
    // intentMap.set('dimensions_tee - F - SW - 6000', require('./fulfillments/dimensionsTeeSw6000'));
    // intentMap.set('dimensions_tee - F - SW - 9000', require('./fulfillments/dimensionsTeeSw9000'));
    // intentMap.set('dimensions_tee - BW - Sch', require('./fulfillments/dimensionsTeeBwSch'));
    agent.handleRequest(intentMap);
});

app.listen(process.env.PORT || 5000, () => console.log(`Server running on ${process.env.PORT || 5000}`));
