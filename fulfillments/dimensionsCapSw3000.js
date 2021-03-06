const _ = require('lodash');
const CapSw = require('../models/CapSw');

const { dimensionsResponce, dontKnowResponce, getLocale, getParam, translate } = require('../functions');

async function dimensionsCapSw3000(agent) {

    let context = agent.contexts.find(context => context.name === "dimensions_cap-followup");
    let locale = getLocale(agent.locale);
    
    if (_.isUndefined(context)) {
        return dontKnowResponce(agent);
    } else {
        
        let sizeOne = getParam(context.parameters.sizeOne);
        let unit = getParam(context.parameters.unit) != 'imperial' ? 'metric' : 'imperial';

        if (!sizeOne) {
            return dontKnowResponce(agent);
        } else {
            await CapSw.findOne({sizeOne, class: 3000}, function (err, res) {
                if (!!err || !res) {
                    return dontKnowResponce(agent);
                } else {
                    return dimensionsResponce(agent, unit, res.dimensions, `${sizeOne} ${translate('capsw', locale)} class 3000`, 'capsw.png')
                }
            });
        }
    }
}

module.exports = dimensionsCapSw3000;

