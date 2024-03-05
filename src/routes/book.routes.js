import express from 'express';
import { getBook } from '../middlewares/book.middleware.js';
import { getAllBooks, createBook, getBookById, updateBook, patchBook, deleteBook } from '../controllers/book.controller.js';

const router = express.Router();

// Rutas para operaciones CRUD básicas
router.get('/', getAllBooks);
router.post('/', createBook);

// Rutas que requieren obtener un libro específico por ID
router.get('/:id', getBook, getBookById);
router.put('/:id', getBook, updateBook);
router.patch('/:id', getBook, patchBook);
router.delete('/:id', getBook, deleteBook);

router.use('/:id', getBook); // Middleware que se aplica a todas las rutas que tengan un ID
export default router;