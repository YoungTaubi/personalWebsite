import { Route, Routes } from 'react-router-dom'
import './App.css';
import DeskTopNavbar from './components/DeskTopNavbar';
import './components/DeskTopNavbar.css';
import './components/Projects.css';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import GetInTouch from './components/GetInTouch';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <div className="App-header">
      <DeskTopNavbar />
      <Routes>
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectPage />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/get-in-touch' element={<GetInTouch />} />
      </Routes>
    </div>
  );
}

export default App;
