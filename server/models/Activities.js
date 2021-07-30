const mongoose = require('mongoose');
const { Schema } = mongoose;

const activitiesSchema = new Schema({
    strengthTraining: {
        type: Boolean,
        default: false,
        required: true,
    },
    biking: {
        type: Boolean,
        default: false,
        required: true,
    },
    running: {
        type: Boolean,
        default: false,
        required: true,
    },
    swimming: {
        type: Boolean,
        default: false,
        required: true,
    },
    basketball: {
        type: Boolean,
        default: false,
        required: true,
    },
    soccer: {
        type: Boolean,
        default: false,
        required: true,
    },
    tennis: {
        type: Boolean,
        default: false,
        required: true,
    },
    rockClimbing: {
        type: Boolean,
        default: false,
        required: true,
    },
    yoga: {
        type: Boolean,
        default: false,
        required: true,
    },
    hiking: {
        type: Boolean,
        default: false,
        required: true,
    },
});

const Activities = mongoose.model('Activities', activitiesSchema);

module.exports = Activities;