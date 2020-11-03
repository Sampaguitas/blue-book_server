const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CapNptSchema = new Schema({
    sizeOne: [{type: String}],
    class: {type: Number },
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
        endToEnd: {
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
        endWallThickness: {
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

module.exports = CapNpt = mongoose.model('capnpts', CapNptSchema);