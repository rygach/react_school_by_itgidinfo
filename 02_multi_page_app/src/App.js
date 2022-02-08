import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Error from './Error';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const nav = [
  { "link": "/", "text": "Главная" },
  { "link": "/about", "text": "О сайте" },
  { "link": "/category", "text": "Категории" },
];
   
const category = [
  { "link": "/category/notebook", "text": "Ноутбуки" },
  { "link": "/category/monitor", "text": "Мониторы" },
  { "link": "/category/cellphone", "text": "Мобильные телефоны" },
];

// const site = {
// 	    nav : [
//     { "link": "/", "text": "Главная" },
//     { "link": "/about", "text": "О сайте" },
//     { "link": "/category", "text": "Категории" },
//   ]
// }

function App() {
  return (
    <>
      <Router>
        <Header nav={nav}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Category" element={<Category category={category}/>} />
          <Route path="*" element={<Error />} />
          <Route path="/Category/:Name" element={<CategoryDescription />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
