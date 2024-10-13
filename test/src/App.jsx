
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './components/Project';
import Resume from './pages/Resume';
import Navigation from './components/Navigation';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom'

function App() {
 
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
