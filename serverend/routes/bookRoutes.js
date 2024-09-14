const express = require('express');
const { getBooks, addBook, updateBook, deleteBook } = require('../controllers/bookController.js');
const authenticate  = require("../middleware/authMiddleware.js")

const router = express.Router();

router.use(authenticate);

router.get('/', authenticate, getBooks);
router.post('/', authenticate,  addBook);
router.put('/:id', authenticate,  updateBook);
router.delete('/:id', authenticate,  deleteBook);

module.exports = router;
