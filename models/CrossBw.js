const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CrossBwSchema = new Schema({
    sizeOne: [{type: String}],
    scheduleOne: [{type: String}],
    dimensions: {
        outsideDiameterBevel: {
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
        centerToEndRun: {
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
        centerToEndOutlet: {
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

module.exports = CrossBw = mongoose.model('crossbws', CrossBwSchema);