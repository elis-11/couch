import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export const Home = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Guide to Happiness", author: "Gael" },
    { id: 2, title: "Guide to JavaScript", author: "Eliza" },
    { id: 3, title: "Guide to Coaching", author: "Rob" },
  ]);
  const [newBook, setNewBook] = useState({});
  // const [isEditing, setIsEditing] = useState(false);
  // const [currentBook, setCurrentBook] = useState({});

  // ADD BOOK
  const addBook = () => {
    const bookNewState = { title: newBook.title, author: newBook.author };
    setBooks([...books, bookNewState]);
  };
  const handleBookInput = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  // EDIT BOOK
  // const handleBookEdit = (e) => {
  //   setCurrentBook({ ...currentBook, text: e.target.value });
  //   console.log(currentBook);
  // };
  // const handleEditFormSubmit = (e) => {
  //   e.preventDefault();
  //   handleUpdateBook(currentBook.id, currentBook);
  // };
  // const handleUpdateBook = (id, updatedBook) => {
  //   const updatedItem = books.map((book) => {
  //     return book.id === id ? updatedBook : book;
  //   });
  //   setIsEditing(false);
  //   setBooks(updatedItem);
  // };
  // const handleEditClick = (book) => {
  //   setIsEditing(true);
  //   setCurrentBook({ ...book });
  // };

  // DELETE BOOK
  const handleDeleteClick = (id) => {
    const removeItem = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(removeItem);
  };

  return (
    <div className="Robapp">
      <h2>Books App</h2>
      <main>
        <div className="container">
          {/* {isEditing ? ( */}
            {/* <form className="edit-form" 
            // onSubmit={handleEditFormSubmit}
            >
              <input
                name="editBook"
                type="text"
                placeholder="Edit Book"
                // value={currentBook.title}
                // onChange={handleBookEdit}
              />
              <button className="update" type="submit">
                Update
              </button>
              <button className="cancel" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </form> */}
         {/* ) : ( */}
            <div className="add">
              <input
                type="text"
                name="title"
                autoComplete="off"
                placeholder="Create a new book"
                onChange={handleBookInput}
                value={newBook.title}
              />
              <div>
                <button onClick={addBook}>Add</button>
              </div>
            </div>
             {/* )} */}
          <div className="search">
            <input type="text" name="search" placeholder="Search.." />
          </div>
          <div className="book-list">
            {books.map((book) => (
              <div key={book.id} className="book">
                <div>{book.title}</div>
                <div>{book.author}</div>
                <div className="icons">
                  <FaEdit
                    className="icon"
                    role="button"
                    // onClick={() => handleEditClick(book)}
                    tabIndex="0"
                  />
                  <FaTrashAlt
                    className="icon"
                    role="button"
                    onClick={() => handleDelete(book.id)}
                    tabIndex="0"
                  />
                </div>
              </div>
          ))}
          </div>
        </div>
      </main>
    </div>
  );
};