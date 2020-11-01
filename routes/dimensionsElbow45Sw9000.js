const _ = require('lodash');
const Elb45sw = require('../models/Elb45sw');

const { dimensionsResponce, dontKnowResponce, getLocale, getParam, translate } = require('../functions');

async function dimensionsElbow45Sw9000(agent) {

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
            await Elb45sw.findOne({sizeOne, class: 9000}, function (err, res) {
                if (!!err || !res) {
                    return dontKnowResponce(agent);
                } else {
                    return dimensionsResponce(agent, unit, res.dimensions, `${sizeOne} ${translate('elb45sw', locale)} class 9000`, 'elb45sw.png')
                }
            });
        }
    }
}

module.exports = dimensionsElbow45Sw9000;
