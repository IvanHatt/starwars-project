import React from 'react'

const Toc = () => {
  return (
    <div className='toc-container'>
      <div className='d-flex flex-column flex-shrink-0 p-3 text-white'>
        <h2>Movie List</h2>
        <hr></hr>
        <ul className='nav nav-pills flex-column mb-auto'>
          <li className='nav-item'>
            <a href='www.g.de' className='nav-link active' aria-current='page'>
              First
            </a>
          </li>
          <li>
            <a href='www.g.de' className='nav-link text-white'>
              Second
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Toc
