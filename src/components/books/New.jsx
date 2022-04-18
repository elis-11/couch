import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export const New = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Guide to Happiness", author: "Gael" },
    { id: 2, title: "Guide to JavaScript", author: "Eliza" },
    { id: 3, title: "Guide to Coaching", author: "Rob" },
  ]);
  //*Add Book
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const addBook = () => {
    const bookNewState = {
      id: new Date(),
      title: newBook.title,
      author: newBook.author,
    };
    setBooks([...books, bookNewState]);
    setNewBook({ ...newBook, title: "", author: "" });
  };
  const handleBookInput = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  //**deleteBook** */
  const HandleDelete = (id) => {
    const deleteBook = books.filter((book) => book.id !== id);
    setBooks(deleteBook);
  };

  return (
    <div className="Robapp">
      <h2>New Book</h2>
      <main>
        <div className="container">
          <div className="search">
            <input type="text" name="search" placeholder="Search.." />
          </div>
          <div className="add">
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleBookInput}
              value={newBook.title}
              autoFocus
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              onChange={handleBookInput}
              value={newBook.author}
            />
            <div>
              <button onClick={addBook}>Add</button>
            </div>
          </div>
          {books.length ? (
            <div className="book-list">
              {books.map((book) => (
                <div key={book.id} className="book">
                  <div>{book.title}</div>
                  <div>{book.author}</div>
                  <div className="icons">
                    <FaEdit className="icon" role="button" tabIndex="0" />
                    <FaTrashAlt
                      className="icon"
                      onClick={() => HandleDelete(book.id)}
                      role="button"
                      tabIndex="0"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h2>Your List is empty.</h2>
          )}
        </div>
      </main>
      <h2>{books.length} List {books.length === 1 ?'book' :'books'} </h2>
    </div>
  );
};
