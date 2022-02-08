import './App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Home from './Home';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Error from './Error';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Category/:Name" element={<CategoryDescription />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
