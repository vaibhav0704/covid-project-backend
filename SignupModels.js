import mongoose from 'mongoose';

const signUpTemplate = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required : true
    },
    lng: {
        type: Number,
        required : true
    },
    points: {
        type: Number,
    },
    date: {
        type: Date,
        default:Date.now
    }
});

export default mongoose.model('mytable', signUpTemplate)