const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Elb45nptSchema = new Schema({
    sizeOne: [{type: String}],
    dimensions: {
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
        outsideDiameterBand: {
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

module.exports = Elb45npt = mongoose.model('elb45npts', Elb45nptSchema);