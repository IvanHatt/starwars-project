import React from 'react'

const Toc = () => {
  return (
    <nav className='navbar navbar-expand-lg d-flex flex-column justify-content-start toc-container'>
      <div className='container-fluid pt-3'>
        <h2>Movie List</h2>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#toc'
          aria-controls='toc'
          aria-expanded='false'
          aria-label='Toggle Toc'
        >
          <i className='bi bi-list'></i>
        </button>
      </div>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse p-3' id='toc'>
          <ul className='nav nav-pills flex-column'>
            <li className='nav-item'>
              <a
                href='www.g.de'
                className='nav-link active'
                aria-current='page'
              >
                A New Hope
              </a>
            </li>
            <li>
              <a href='www.g.de' className='nav-link text-white'>
                Second
              </a>
            </li>
            <li>
              <a href='www.g.de' className='nav-link text-white'>
                Second
              </a>
            </li>
            <li>
              <a href='www.g.de' className='nav-link text-white'>
                Second
              </a>
            </li>
            <li>
              <a href='www.g.de' className='nav-link text-white'>
                Second
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

      {/* <div className='toc-container'>
      
    </div> */}
    </nav>
  )
}

export default Toc
