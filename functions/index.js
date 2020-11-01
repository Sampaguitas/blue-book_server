const _ = require('lodash');
const {Card } = require('dialogflow-fulfillment');
let { name } = require('../constants');

function dimensionsResponce(agent, system, dimensions, title, image) {
    let locale = getLocale(agent.locale);
    if (isScreenCapable(agent)) {
        let params = Object.keys(dimensions).reduce(function(acc, cur) {
            if (dimensions[cur].hasOwnProperty(system)) {
                let values = Object.keys(dimensions[cur][system].value).reduce(function(accValue, curValue) {
                    if (['solid', 'min', 'max', 'avg'].includes(curValue) && !!dimensions[cur][system].value[curValue]) {
                        accValue.push(`${dimensions[cur][system].value[curValue]}${dimensions[cur][system].uom ? ` ${dimensions[cur][system].uom}` : ''}${curValue != 'solid' ? ` *${translate(curValue, locale)}*` : ''}`);
                    }
                    return accValue;
                }, []).join(' - ');
                if (!!values) {
                    acc.push(`${translate(cur, locale)}${dimensions[cur].symbol ? ' (' + dimensions[cur].symbol + ')' : ''}: ${values}`);
                }
            }
            return acc;
        }, []);
        return (
            agent.add(new Card({
                title: title,
                imageUrl: `https://bluebook-bucket.s3.eu-west-3.amazonaws.com/${image}`,
                text: `${params.join('  \n')}`,
            })),
            agent.add(`${translate('whatNext', locale)}`)
        );
    } else {
        let params = Object.keys(dimensions).reduce(function(acc, cur) {
            if (dimensions[cur].hasOwnProperty(system)) {
                let values = Object.keys(dimensions[cur][system].value).reduce(function(accValue, curValue) {
                    if (['solid', 'min', 'max', 'avg'].includes(curValue) && !!dimensions[cur][system].value[curValue]) {
                        accValue.push(`${dimensions[cur][system].value[curValue]}${dimensions[cur][system].uom ? ` ${dimensions[cur][system].uom}` : ''}${curValue != 'solid' ? ` ${translate(curValue, locale)}` : ''}`);
                    }
                    return accValue;
                }, []).join(' - ');
                if (!!values) {
                    acc.push(`${translate(cur, locale)}: ${values}`);
                }
            }
            return acc;
        }, []);
        return (
            agent.add(`${translate('dimOf', locale)} ${title} ${translate('are', locale)}:`),
            agent.add(params.join(', ')),
            agent.add(`${translate('whatNext', locale)}`)
        );
    }
}

function dontKnowResponce(agent) {
    let locale = getLocale(agent.locale);
    return ( agent.add(`${translate('dontKnow', locale)}`), agent.add(`${translate('whatNext', locale)}`));
}

function getLocale(locale) {
    if (['en', 'fr', 'nl'].includes(locale || 'en')) {
        return locale;
    } else {
        return 'en';
    }
}

function getParam(parameter) {
    if (_.isArray(parameter) && !_.isEmpty(parameter)) {
        return parameter[0];
    } else {
        return parameter || undefined;
    };
}

function isScreenCapable(agent) {
    if (_.isUndefined(agent.originalRequest.payload.surface)) {
        return false
    } else {
        return agent.originalRequest.payload.surface.capabilities.reduce(function(acc, cur) {
            if (cur.name === 'actions.capability.SCREEN_OUTPUT') {
                acc = true;
            }
            return acc;
        }, false)
    }
    
}

function translate(key, locale) {
    if (!Object.keys(name).includes(key)) {
        return '';
    } else {
        if (_.isArray(name[key][locale])) {
            return name[key][locale][Math.floor(Math.random() * name[key][locale].length)];
        } else {
            return name[key][locale];
        }
    }
}

module.exports = {
    dimensionsResponce,
    dontKnowResponce,
    getLocale,
    getParam,
    isScreenCapable,
    translate,
}