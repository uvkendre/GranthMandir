import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}