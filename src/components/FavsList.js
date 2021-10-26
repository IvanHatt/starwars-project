import React from 'react'

const FavsList = ({ favs }) => {
  return (
    <div className='film-content'>
      <h2>My Favorites</h2>
      {favs.length === 0 ? (
        <div className='alert alert-warning' role='alert'>
          No favorites yet!
        </div>
      ) : (
        <ul className='list-group list-group-flush'>
          {favs.map((fav) => (
            <li className='list-group-item bg-transparent' key={fav.title}>
              {fav.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FavsList
