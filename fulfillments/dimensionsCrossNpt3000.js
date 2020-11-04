const _ = require('lodash');
const CrossNpt = require('../models/CrossNpt');

const { dimensionsResponce, dontKnowResponce, getLocale, getParam, translate } = require('../functions');

async function dimensionsCrossNpt3000(agent) {

    let context = agent.contexts.find(context => context.name === "dimensions_cross-followup");
    let locale = getLocale(agent.locale);

    if (_.isUndefined(context)) {
        return dontKnowResponce(agent);
    } else {
        
        let sizeOne = getParam(context.parameters.sizeOne);
        let unit = getParam(context.parameters.unit) != 'imperial' ? 'metric' : 'imperial';
        
        if (!sizeOne) {
            return dontKnowResponce(agent);
        } else {
            await CrossNpt.findOne({sizeOne, class: 3000}, function (err, res) {
                if (!!err || !res) {
                    return dontKnowResponce(agent);
                } else {
                    return dimensionsResponce(agent, unit, res.dimensions, `${sizeOne} ${translate('crossnpt', locale)} class 3000`, 'crossnpt.png')
                }
            });
        }
    }
}

module.exports = dimensionsCrossNpt3000;