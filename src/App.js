import './App.css';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Testimonial from './components/Founder';
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import {createBrowserRouter} from 'react-router-dom';

function App() {
  return  (
  <div className="App">
     <Home />
     <About />
     <Work />
     <Testimonial />
     <Contact />
     <Footer />
    </div>
  );
}
export default App;

export const router = createBrowserRouter([
  { path: "", element: <App />}
])