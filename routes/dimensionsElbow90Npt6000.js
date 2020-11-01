const _ = require('lodash');
const Elb90npt = require('../models/Elb90npt');

const { dimensionsResponce, dontKnowResponce, getLocale, getParam, translate } = require('../functions');

async function dimensionsElbow90Npt6000(agent) {

    let context = agent.contexts.find(context => context.name === "dimensions_elbow-followup");
    let locale = getLocale(agent.locale);
    
    if (_.isUndefined(context)) {
        return dontKnowResponce(agent);
    } else {
        
        let sizeOne = getParam(context.parameters.sizeOne);

        if (!sizeOne) {
            return dontKnowResponce(agent);
        } else {
            await Elb90npt.findOne({sizeOne, class: 6000}, function (err, res) {
                if (!!err || !res) {
                    return dontKnowResponce(agent);
                } else {
                    return dimensionsResponce(agent, res.dimensions, `${sizeOne} ${translate('elb90npt', locale)} class 6000`, 'elb90npt.png')
                }
            });
        }
    }
}

module.exports = dimensionsElbow90Npt6000;

