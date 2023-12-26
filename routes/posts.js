const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    picture: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userData'
    },
    caption: String,
    date: {
        type: Date,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userData',
        }
    ]
});


module.exports = mongoose.model('post', postSchema);