const _ = require('lodash');
const Elb45lr = require('../models/Elb45lr');

const { dimensionsResponce, dontKnowResponce, getLocale, getParam, translate } = require('../functions');

async function dimensionsElbowBw45Sch(agent) {

    let context = agent.contexts.find(context => context.name === "dimensions_elbow-followup");
    let locale = getLocale(agent.locale);
    
    if (_.isUndefined(context)) {
        return dontKnowResponce(agent);
    } else {
        
        let sizeOne = getParam(context.parameters.sizeOne);
        let scheduleOne = getParam(context.parameters.scheduleOne);
        let unit = getParam(context.parameters.unit) || 'metric';

        if (!sizeOne || !scheduleOne) {
            return dontKnowResponce(agent);
        } else {
            await Elb45lr.findOne({sizeOne, scheduleOne}, function (err, res) {
                if (!!err || !res) {
                    return dontKnowResponce(agent);
                } else {
                    return dimensionsResponce(agent, unit, res.dimensions, `${sizeOne} ${scheduleOne} ${translate('elb45lr', locale)}`, 'elb45lr.png')
                }
            });
        }
    }
}

module.exports = dimensionsElbowBw45Sch;

