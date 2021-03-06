const _ = require('lodash');
const Elb90Sr = require('../models/Elb90Sr');

const { dimensionsResponce, dontKnowResponce, getLocale, getParam, translate } = require('../functions');

async function dimensionsElbowBw90SrSch(agent) {

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
            await Elb90Sr.findOne({sizeOne, scheduleOne}, function (err, res) {
                if (!!err || !res) {
                    return dontKnowResponce(agent);
                } else {
                    return dimensionsResponce(agent, unit, res.dimensions, `${sizeOne} ${scheduleOne} ${translate('elb90sr', locale)}`, 'elb90sr.png')
                }
            });
        }
    }
}

module.exports = dimensionsElbowBw90SrSch;