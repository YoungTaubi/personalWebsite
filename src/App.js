import { Route, Routes } from 'react-router-dom'
import './App.css';
import './components/DeskTopNavbar.css';
import './pages/ProjectPage.css';
import './pages/AllProjectsOverview.css'
import './pages/AboutMe.css';
import DeskTopNavbar from './components/DeskTopNavbar';
import AllProjectsOverview from './pages/AllProjectsOverview';
import AboutMe from './pages/AboutMe.js';
import GetInTouch from './pages/GetInTouch';
import ProductPage from './pages/ProjectPage';
import Welcome from './pages/Welcome';

function App() {

  return (
    <div className="App-header">
      <DeskTopNavbar />

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/projects' element={<AllProjectsOverview />} />
        <Route path='/projects/:id' element={<ProductPage />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/get-in-touch' element={<GetInTouch />} />
      </Routes>

    </div>
  );
}

export default App;
