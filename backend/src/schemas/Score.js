import mongoose, {Schema, model} from 'mongoose';

const scoreSchema = Schema({
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    score: Number,
    duration: Number,
});

const Score = mongoose.model('Score', scoreSchema);

export default Score;
