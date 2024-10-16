
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';

import { Outlet } from 'react-router-dom'

function App() {
 
  return (
    <div className='wrapper'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
