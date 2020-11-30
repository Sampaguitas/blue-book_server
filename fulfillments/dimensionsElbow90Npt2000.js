const _ = require('lodash');
const Elb90Npt = require('../models/Elb90Npt');

const { dimensionsResponce, dontKnowResponce, getLocale, getParam, translate } = require('../functions');

async function dimensionsElbow90Npt2000(agent) {

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
            await Elb90Npt.findOne({sizeOne, class: 2000}, function (err, res) {
                if (!!err || !res) {
                    return dontKnowResponce(agent);
                } else {
                    return dimensionsResponce(agent, unit, res.dimensions, `${sizeOne} ${translate('elb90npt', locale)} class 2000`, 'elb90npt.png')
                }
            });
        }
    }
}

module.exports = dimensionsElbow90Npt2000;

