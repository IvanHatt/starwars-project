import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <h1>Star Wars</h1>
      <div className='d-flex justify-content-end'>
        <button type='button' className='btn btn-dark mx-5 position-relative'>
          <i className='bi bi-star m-1'></i> My favorites
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary'>
            2<span className='visually-hidden'>number of favorites</span>
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header
