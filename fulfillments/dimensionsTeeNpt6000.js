const _ = require('lodash');
const TeeNpt = require('../models/TeeNpt');

const { dimensionsResponce, dontKnowResponce, getLocale, getParam, translate } = require('../functions');

async function dimensionsTeeNpt6000(agent) {

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
            await TeeNpt.findOne({sizeOne, class: 6000}, function (err, res) {
                if (!!err || !res) {
                    return dontKnowResponce(agent);
                } else {
                    return dimensionsResponce(agent, unit, res.dimensions, `${sizeOne} ${translate('teenpt', locale)} class 6000`, 'teenpt.png')
                }
            });
        }
    }
}

module.exports = dimensionsTeeNpt6000;