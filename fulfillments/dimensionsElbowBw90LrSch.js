const _ = require('lodash');
const Elb90Lr = require('../models/Elb90Lr');

const { dimensionsResponce, dontKnowResponce, getLocale, getParam, translate } = require('../functions');

async function dimensionsElbowBw90LrSch(agent) {

    let context = agent.contexts.find(context => context.name === "dimensions_elbow-followup");
    let locale = getLocale(agent.locale);
    
    if (_.isUndefined(context)) {
        return dontKnowResponce(agent);
    } else {
        
        let sizeOne = getParam(context.parameters.sizeOne);
        let scheduleOne = getParam(context.parameters.scheduleOne);
        let unit = getParam(context.parameters.unit) != 'imperial' ? 'metric' : 'imperial';

        if (!sizeOne || !scheduleOne) {
            return dontKnowResponce(agent);
        } else {
            await Elb90Lr.findOne({sizeOne, scheduleOne}, function (err, res) {
                if (!!err || !res) {
                    return dontKnowResponce(agent);
                } else {
                    return dimensionsResponce(agent, unit, res.dimensions, `${sizeOne} ${scheduleOne} ${translate('elb90lr', locale)}`, 'elb90lr.png')
                }
            });
        }
    }
}

module.exports = dimensionsElbowBw90LrSch;