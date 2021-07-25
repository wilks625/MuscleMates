const mongoose = require('mongoose');
const { Schema } = mongoose;

const activitiesSchema = new Schema({
    strengthTraining: {
        type: Boolean,
        default: false,
    },
    biking: {
        type: Boolean,
        default: false,
    },
    running: {
        type: Boolean,
        default: false,
    },
    swimming: {
        type: Boolean,
        default: false,
    },
    basketball: {
        type: Boolean,
        default: false,
    },
    soccer: {
        type: Boolean,
        default: false,
    },
    tennis: {
        type: Boolean,
        default: false,
    },
    rockClimbing: {
        type: Boolean,
        default: false,
    },
    yoga: {
        type: Boolean,
        default: false,
    },
    hiking: {
        type: Boolean,
        default: false,
    },
});

const Activities = mongoose.model('Activities', activitiesSchema);

module.exports = Activities;