const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Elb90srSchema = new Schema({
    sizeOne: [{type: String}],
    scheduleOne: [{type: String}],
    dimensions: {
        outsideDiameter: {
            symbol: {type: String},
            imperial: {
                value: {
                    solid: {type: Number},
                    avg: {type: Number},
                    min: {type: Number},
                    max: {type: Number}
                },
                uom: {type: String},
            },
            metric: {
                value: {
                    solid: {type: Number},
                    avg: {type: Number},
                    min: {type: Number},
                    max: {type: Number}
                },
                uom: {type: String},
            }
        },
        wallThickness: {
            symbol: {type: String},
            imperial: {
                value: {
                    solid: {type: Number},
                    avg: {type: Number},
                    min: {type: Number},
                    max: {type: Number}
                },
                uom: {type: String},
            },
            metric: {
                value: {
                    solid: {type: Number},
                    avg: {type: Number},
                    min: {type: Number},
                    max: {type: Number}
                },
                uom: {type: String},
            }
        },
        centerToEnd: {
            symbol: {type: String},
            imperial: {
                value: {
                    solid: {type: Number},
                    avg: {type: Number},
                    min: {type: Number},
                    max: {type: Number}
                },
                uom: {type: String},
            },
            metric: {
                value: {
                    solid: {type: Number},
                    avg: {type: Number},
                    min: {type: Number},
                    max: {type: Number}
                },
                uom: {type: String},
            }
        },
        weight: {
            symbol: {type: String},
            imperial: {
                value: {
                    solid: {type: Number},
                    avg: {type: Number},
                    min: {type: Number},
                    max: {type: Number}
                },
                uom: {type: String},
            },
            metric: {
                value: {
                    solid: {type: Number},
                    avg: {type: Number},
                    min: {type: Number},
                    max: {type: Number}
                },
                uom: {type: String},
            }
        }
    }
});

module.exports = Elb90sr = mongoose.model('elb90srs', Elb90srSchema);