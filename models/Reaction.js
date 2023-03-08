///Users/alecsummers/repo/class-repo/18-NoSQL/01-Activities/25-Ins_CRUD-Subdoc/models/Response.js

const { Schema, Types}  = require('mongoose');
const formatDate = require('../util/daystamp');


const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true, 
        max: 280
    },
    username: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (Date) => formatDate(Date)
    }
});

module.exports = reactionSchema