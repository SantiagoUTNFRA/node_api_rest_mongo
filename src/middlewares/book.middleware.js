import Book from '../models/book.model.js';

export const getBook = async (req, res, next) => {
    let book;
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({
            message: 'El ID del libro no es valido'
        });
    }

    try {
        book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({
                message: 'El libro no fue encontrado'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message || 'Some error occurred while retrieving book'
        });
    }

    res.book = book;
    next();
}