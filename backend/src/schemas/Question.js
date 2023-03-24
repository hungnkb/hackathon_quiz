import mongoose, {Schema, model} from 'mongoose';

const questionSchema = Schema({
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    question: String,
    file: String,
    content: Object,
    correct: Number,
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
