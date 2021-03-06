const _ = require('lodash');
const Elb45Sw = require('../models/Elb45Sw');

const { dimensionsResponce, dontKnowResponce, getLocale, getParam, translate } = require('../functions');

async function dimensionsElbow45Sw6000(agent) {

    let context = agent.contexts.find(context => context.name === "dimensions_elbow-followup");
    let locale = getLocale(agent.locale);
    
    if (_.isUndefined(context)) {
        return dontKnowResponce(agent);
    } else {
        
        let sizeOne = getParam(context.parameters.sizeOne);
        let unit = getParam(context.parameters.unit) != 'imperial' ? 'metric' : 'imperial';

        if (!sizeOne) {
            return dontKnowResponce(agent);
        } else {
            await Elb45Sw.findOne({sizeOne, class: 6000}, function (err, res) {
                if (!!err || !res) {
                    return dontKnowResponce(agent);
                } else {
                    return dimensionsResponce(agent, unit, res.dimensions, `${sizeOne} ${translate('elb45sw', locale)} class 6000`, 'elb45sw.png')
                }
            });
        }
    }
}

module.exports = dimensionsElbow45Sw6000;

