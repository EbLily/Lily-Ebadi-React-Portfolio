
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <div className='navbar'>
        <Link to='/' className='link'>About</Link>
        <Link to='/contact' className='link'>Contact</Link>
        <Link to='/portfolio' className='link'>Portfolio</Link>
        <Link to='/resume' className='link'>Resume</Link>

      </div>
    </>
  )
}

export default Navigation