const { Schema, model} = require('mongoose');
const formatDate = require('../util/daystamp');
const Reactions = require('./Reaction');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now, 
        get: (Date) => formatDate(Date)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [Reactions]
});



thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought
