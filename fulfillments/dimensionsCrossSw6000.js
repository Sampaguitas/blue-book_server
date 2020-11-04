const _ = require('lodash');
const CrossSw = require('../models/CrossSw');

const { dimensionsResponce, dontKnowResponce, getLocale, getParam, translate } = require('../functions');

async function dimensionsCrossSw6000(agent) {

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
            await CrossSw.findOne({sizeOne, class: 6000}, function (err, res) {
                if (!!err || !res) {
                    return dontKnowResponce(agent);
                } else {
                    return dimensionsResponce(agent, unit, res.dimensions, `${sizeOne} ${translate('crosssw', locale)} class 6000`, 'crosssw.png')
                }
            });
        }
    }
}

module.exports = dimensionsCrossSw6000;