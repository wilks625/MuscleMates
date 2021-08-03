const mongoose = require('mongoose');
const { Schema } = mongoose;

const pictureSchema = new Schema({
    name: {
        type: String,
    },
    desc:{ 
        type: String,
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
});

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;