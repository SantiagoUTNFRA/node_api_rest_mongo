import mongoose from 'mongoose';

export const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publication_date: {
        type: Date,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
