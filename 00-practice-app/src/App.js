import {Route, Routes} from 'react-router-dom'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Project from './components/Project';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="bucket-app">
<Navigation/>
<Routes>
  <Route path="/" element={<About/>}/>
  <Route path="portfolio" element={<Portfolio/>}/>
  <Route path="resume" element={<Resume/>}/>
  <Route path="project" element={<Project/>}/>
  <Route path="contact" element={<Contact/>}/>


</Routes>
    </div>
  );
}

export default App;
