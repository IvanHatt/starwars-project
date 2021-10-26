import React from 'react'

const Film = ({ film, handleFav }) => {
  const { title, opening_crawl, director, release_date } = film
  return (
    <div className='film-content'>
      <h2>{title}</h2>
      <p>{opening_crawl}</p>
      <p>Directed by {director}</p>
      <p>Released on {release_date}</p>
      <button
        type='button'
        className='btn btn-dark m-1'
        data-bs-toggle='tooltip'
        data-bs-placement='bottom'
        title='Add to favorites'
        onClick={() => handleFav(film)}
      >
        <i className='bi bi-star'></i>
      </button>
      <button
        type='button'
        className='btn btn-dark m-1'
        data-bs-toggle='tooltip'
        data-bs-placement='bottom'
        title='Remove from favorites'
      >
        <i className='bi bi-trash'></i>
      </button>
    </div>
  )
}

export default Film
