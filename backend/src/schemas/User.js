import mongoose, {Schema, model} from 'mongoose';

const userSchema = Schema({
    scores: [{
        type: Schema.Types.ObjectId,
        ref: 'Score'
    }],
    username: String,
    password: String,
    role: String,
});

const User = mongoose.model('User', userSchema);

export default User;
