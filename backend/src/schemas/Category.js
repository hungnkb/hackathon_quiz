import mongoose, {Schema, model} from 'mongoose';

const categorySchema = Schema({
    nameCategory: String,
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
