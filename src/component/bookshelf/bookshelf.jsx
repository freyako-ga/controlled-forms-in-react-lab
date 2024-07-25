import React, { useState } from 'react';

const Bookshelf = () => {
  // State to store the array of book objects
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  // State to handle inputs for new book additions
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevNewBook) => ({
      ...prevNewBook,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newBook.title && newBook.author) {
      setBooks((prevBooks) => [...prevBooks, newBook]);
      setNewBook({ title: '', author: '' });
    }
  };

  return (
    <div>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{`${book.title} by ${book.author}`}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
            placeholder="Author"
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Bookshelf;






