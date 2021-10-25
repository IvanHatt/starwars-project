import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <h1>Star Wars</h1>
      <div className='d-flex justify-content-end'>
        <a className='favs' href='www.g.de'>
          My Favorites
        </a>
      </div>
    </header>
  )
}

export default Header
