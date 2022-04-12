import { useState } from "react";

export const HW7 = () => {
  const [blogs, setBlogs] = useState([
    { id: "1", title: "Blog 1", author: "Gael" },
    { id: "2", title: "Blog 2", author: "Rob" },
    { id: "3", title: "Blog 3", author: "Gael" },
  ]);
  const [newTitle, setNewTitle] = useState(""); // INPUT STATE
  const [newAuthor, setNewAuthor] = useState("");

  console.log(blogs);

  // reacted auf TYPING des Users
  const onTitleChange = (event) => {
    // user hat getippt => aber wo ist es?
    setNewTitle(event.target.value);
  };
  const onAuthorChange = (event) => {
    setNewAuthor(event.target.value);
  };

  // reacted auf BUTTON CLICK => ADD des Users
  const addNewBlog = () => {
    const newId = Date.now().toString();
    const newBlog = { id: newId, title: newTitle, author: newAuthor };
    setBlogs([...blogs, newBlog]); // copy all items from previous array and ADD a new one
    setNewTitle("");
    setNewAuthor("");
  };
  return (
    <div>
      <p> HW-7</p>
      <h2>Blog posts ✨</h2>
      <input value={newTitle} onChange={onTitleChange} autoFocus />
      <input value={newAuthor} onChange={onAuthorChange} />
      <button onClick={addNewBlog}>Add</button>
      <div>
      {
        <div className="blogs">
          {blogs.map((blog) => (
            <div key={blog.id}>
              {blog.title} von {blog.author}
            </div>
          ))}
        </div>
      }
      </div>
    </div>
  );
};