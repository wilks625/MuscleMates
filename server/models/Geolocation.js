const mongoose = require('mongoose');
const { Schema } = mongoose;

const geolocationsSchema = new Schema({
    user_id: {
        type: ID,
        require: [true, 'please add a mate ID'],
        trim: true,
        maxlength: [5, 'Mate ID must be less than 5 chars'],  
    },
    address:{
        type: String,
        require: [true, 'Please add address']
   },
    
    point: {
        type: {
            type: String,
            enum: ['Point'],
            
          },
          coordinates: {
            type: [Number],
            
          },
        formatedaddress: String,
        zipcode: Number,
        city: String,
        },
        createdat:{
            type: Date,
            default: Date.now
        }
});
const Geolocations = mongoose.model('Geolocations', geolocationsSchema);
module.exports = Geolocations;

