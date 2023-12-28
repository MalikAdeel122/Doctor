
import './App.css';
import './global.css';
import './media.css';
import { Route, Routes } from "react-router-dom";
// import './sass/style.scss';
import './css/style.css';
// import './sass/style.css.map';
import Header from './components/Header';
import Home from './Pages/Home';
import Service from './Pages/Service';
import About from './Pages/About';
import Doctor from './Pages/Doctor';
import Book from './Pages/Book';
import Review from './Pages/Review';
import Blog from './Pages/Blog';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="about" element={<About />} />
        <Route path="doctor" element={<Doctor />} />
        <Route path="book" element={<Book />} />
        <Route path="review" element={<Review />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
