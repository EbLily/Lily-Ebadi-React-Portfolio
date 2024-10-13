import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <div>Navigation</div>
      <Link to='/'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/resume'>Resume</Link>
    </>
  )
}

export default Navigation