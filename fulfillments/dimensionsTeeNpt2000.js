const _ = require('lodash');
const TeeNpt = require('../models/TeeNpt');

const { dimensionsResponce, dontKnowResponce, getLocale, getParam, translate } = require('../functions');

async function dimensionsTeeNpt2000(agent) {

    let context = agent.contexts.find(context => context.name === "dimensions_tee-followup");
    let locale = getLocale(agent.locale);

    if (_.isUndefined(context)) {
        return dontKnowResponce(agent);
    } else {
        
        let sizeOne = getParam(context.parameters.sizeOne);
        let unit = getParam(context.parameters.unit) != 'imperial' ? 'metric' : 'imperial';
        
        if (!sizeOne) {
            return dontKnowResponce(agent);
        } else {
            await TeeNpt.findOne({sizeOne, class: 2000}, function (err, res) {
                if (!!err || !res) {
                    return dontKnowResponce(agent);
                } else {
                    return dimensionsResponce(agent, unit, res.dimensions, `${sizeOne} ${translate('teenpt', locale)} class 2000`, 'teenpt.png')
                }
            });
        }
    }
}

module.exports = dimensionsTeeNpt2000;