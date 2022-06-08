import { Route, Routes } from 'react-router-dom'
import './App.css';
import DeskTopNavbar from './components/DeskTopNavbar';
import './components/DeskTopNavbar.css';
import './pages/ProjectPage.css';
import './pages/AllProjectsOverview.css'
import AllProjectsOverview from './pages/AllProjectsOverview';
import AboutMe from './pages/AboutMe';
import GetInTouch from './pages/GetInTouch';
import ProductPage from './pages/ProjectPage';

function App() {

  return (
    <div className="App-header">
      <DeskTopNavbar />
      <Routes>
        <Route path='/projects' element={<AllProjectsOverview />} />
        <Route path='/projects/:id' element={<ProductPage />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/get-in-touch' element={<GetInTouch />} />
      </Routes>
    </div>
  );
}

export default App;
