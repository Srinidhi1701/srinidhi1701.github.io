import './App.scss';
import { Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/resume" element={<Resume />}/>   
      <Route path="/about/projects" element={<Projects />}/>  
      <Route path="/contact" element={<Contact />} />
      </Route>
      
    </Routes>
    </>
  );
}

export default App;
