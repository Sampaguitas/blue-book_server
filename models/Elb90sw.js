const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Elb90swSchema = new Schema({
    sizeOne: [{type: String}],
    dimensions: {
        socketBoreDia: {
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
        boreDiaFittings: {
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
        socketWallThickness: {
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
        bodyWall: {
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
        socketDepth: {
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
        centerToBottomSocket: {
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
        tolerance: {
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

module.exports = Elb90sw = mongoose.model('elb90sws', Elb90swSchema);