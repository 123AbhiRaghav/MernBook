const Book = require('../models/Book.js');

exports.getBooks = async (req, res) => {
  try {
    const userId = req.user.id;
    const books = await Book.find({ userId });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching books' });
  }
};

exports.addBook = async (req, res) => {
  try {
    const { title, author, price, description, category} = req.body;
    
    const userId = req.user.id;
    const newBook = new Book({
      title,
      author,
      price,
      description,
      category,
      userId  
    });

    await newBook.save();

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id; 

    const book = await Book.findOneAndUpdate({ _id: id, userId }, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ message: "Book not found or not authorized" });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: "Error updating book", error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id; 

    const book = await Book.findOneAndDelete({ _id: id, userId });
    if (!book) {
      return res.status(404).json({ message: "Book not found or not authorized" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting book", error: err.message });
  }
};
