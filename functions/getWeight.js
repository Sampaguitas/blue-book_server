const _ = require('lodash');
const Dimension = require('../models/Dimension');
const constants = require('../constants');

function getWeight(agent) {
    let whatNext = constants.whatNextArray[Math.floor(Math.random() * constants.whatNextArray.length)];
    let sizeOne = _.isArray(agent.parameters.sizeOne) && !_.isEmpty(agent.parameters.sizeOne) ? agent.parameters.sizeOne[0] :  agent.parameters.sizeOne;
    let scheduleOne = _.isArray(agent.parameters.scheduleOne) && !_.isEmpty(agent.parameters.scheduleOne) ? agent.parameters.scheduleOne[0] :  agent.parameters.scheduleOne;
    let item = _.isArray(agent.parameters.item) && !_.isEmpty(agent.parameters.item) ? agent.parameters.item[0] :  agent.parameters.item;
    switch (item) {
        case 'pipe':
            return Dimension.findOne({
                item: item,
                ['sizeOne.tags']: sizeOne,
                ['scheduleOne.tags']: scheduleOne
            }, function (err, res) {
                if (err || !res) {
                    return agent.add(`Sorry. I could not find the weight for this item. ${whatNext}`);
                } else {
                    let { weight } = res.dimensions;
                    return agent.add(`${weight.display} of a ${sizeOne} ${item} ${scheduleOne} is ${weight.metric.value} ${weight.metric.uom}. ${whatNext}`);
                }
            });
        default: agent.add(`Sorry, I havn't been trained for ${item} yet. ${whatNext}`);
    }
}

module.exports = getWeight;