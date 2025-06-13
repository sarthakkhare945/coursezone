import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import './App.css';
import Home from './pages/Home/Home';
import CourseDetails from './pages/Courses/CourseDetails';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Articles from './pages/Articles/Articles';
import Courses from './pages/Courses/Courses';
import ArticlePage from './pages/Articles/ArticlePage';
import Tutorials from './pages/Tutorials/Tutorials';
import useCanvasCursor from './hooks/useCanvaCursor';
import Playground from './pages/Playground/Playground';
// import About from './pages/About/About';  // Example of another page
import Contact from './pages/Contact/Contact';  // Example of another page
import About from './pages/About/About';
import TutorialsDetails from './pages/Tutorials/TutorialsDetails';



// CanvasCursor Component
const CanvasCursor = () => {
  useCanvasCursor();
  return <canvas className='pointer-events-none fixed inset-0' id='canvas' />;
}; 
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
       <Navbar/>
         {/* Canvas Cursor */}
      <CanvasCursor />
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route to Home page */}
          <Route path="/courses" element={<Courses />} /> 
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/tutorials" element={<Tutorials />} />
           <Route path="/tutorials/:id" element={<TutorialsDetails />} />
          <Route path="/playground" element={<Playground />} />
          
          {/* <Route path="/about" element={<About />} /> {/* Route to About page */}
          <Route path="/contact" element={<Contact />} /> Route to Contact page 
          <Route path="/about" element={<About />} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
