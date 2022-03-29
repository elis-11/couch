import { Route, Routes } from 'react-router-dom';
import { Books } from './components/Books';
import { Course } from './components/course/Course';
import { Home } from './components/home/Home';
import { Nav } from './components/layout/Nav';
import { Todo } from './components/todo/Todo';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/todo" element={<Todo />} />
  <Route path="/course/*" element={<Course />} />
  <Route path="/books" element={<Books />} />
</Routes>
    </div>
  );
}

export default App;
