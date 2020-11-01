const _ = require('lodash');
const Elb90sw = require('../models/Elb90sw');

const { dimensionsResponce, dontKnowResponce, getLocale, getParam, translate } = require('../functions');

async function dimensionsElbow90Sw3000(agent) {

    let context = agent.contexts.find(context => context.name === "dimensions_elbow-followup");
    let locale = getLocale(agent.locale);
    
    if (_.isUndefined(context)) {
        return dontKnowResponce(agent);
    } else {
        
        let sizeOne = getParam(context.parameters.sizeOne);
        let unit = getParam(context.parameters.unit) || 'metric';

        if (!sizeOne) {
            return dontKnowResponce(agent);
        } else {
            await Elb90sw.findOne({sizeOne, class: 3000}, function (err, res) {
                if (!!err || !res) {
                    return dontKnowResponce(agent);
                } else {
                    return dimensionsResponce(agent, unit, res.dimensions, `${sizeOne} ${translate('elb90sw', locale)} class 3000`, 'elb90sw.png')
                }
            });
        }
    }
}

module.exports = dimensionsElbow90Sw3000;

