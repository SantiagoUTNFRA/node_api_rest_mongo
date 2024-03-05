import Book from '../models/book.model.js';


export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();

        if (books.length === 0) {
            return res.status(204).json([]);
        }

        res.json(books);

    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while retrieving books'
        });
    }
}

//obtener un libro por su id
export const getBookById = (async (req, res) => {
    try {
        res.json(res.book);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while retrieving book'
        });
    }
});

//crear un nuevo libro
export const createBook = (async (req, res) => {

    const { title, author, genre, publication_date } = req?.body;

    if (!title || !author || !genre || !publication_date) {
        return res.status(400).json({
            message: 'Los campos titulo, autor, género y fecha son obligatorios!'
        });
    }

    if (!req.body) {
        return res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    const book = new Book({
        title,
        author,
        genre,
        publication_date
    });

    try {
        const data = await book.save();

        res.status(201).send(data);

    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the book'
        });
    }
});

//actualizar un libro por su id
export const updateBook = async (req, res) => {
    const { title, author, genre, publication_date } = req.body;

    if (!title || !author || !genre || !publication_date) {
        return res.status(400).json({
            message: 'Los campos titulo, autor, género y fecha son obligatorios!'
        });
    }

    const book = res.book;
    book.title = title;
    book.author = author;
    book.genre = genre;
    book.publication_date = publication_date;

    try {
        const updatedBook = await book.save();
        res.json(updatedBook);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while updating the book'
        });
    }
}

//actualizar parcialmente un libro por su id
export const patchBook = async (req, res) => {
    const book = res.book;

    if (req.body.title) book.title = req.body.title;
    if (req.body.author) book.author = req.body.author;
    if (req.body.genre) book.genre = req.body.genre;
    if (req.body.publication_date) book.publication_date = req.body.publication_date;

    try {
        const updatedBook = await book.save();
        res.json(updatedBook);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while updating the book'
        });
    }
};

//eliminar un libro por su id
export const deleteBook = (async (req, res) => {
    try {
        await res.book.deleteOne({
            _id: res.book._id
        });
        res.json({ message: 'Book was deleted successfully!' });
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while deleting the book'
        });
    }
});