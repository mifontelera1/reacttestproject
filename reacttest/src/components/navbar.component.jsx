import React from 'react';

function Navbar() {
  return (
    <div className='m-2'>
      <div className='border'>
        <nav>
          <ul className='d-flex justify-content-end justify-content-between'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
