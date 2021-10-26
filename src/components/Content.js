import React from 'react'

const Content = () => {
  return (
    <div className='content'>
      <div className='film-content'>
        <h1>Films</h1>
        <h3>A New Hope</h3>
        <p>
          It is a period of civil war. Rebel spaceships, striking from a hidden
          base, have won their first victory against the evil Galactic Empire.
          During the battle, Rebel spies managed to steal secret plans to the
          Empire's ultimate weapon, the DEATH STAR, an armored space station
          with enough power to destroy an entire planet. Pursued by the Empire's
          sinister agents, Princess Leia races home aboard her starship,
          custodian of the stolen plans that can save her people and restore
          freedom to the galaxy....
        </p>
        <p>Directed by</p>
        <p>Released on</p>
        <button
          type='button'
          class='btn btn-dark m-1'
          data-bs-toggle='tooltip'
          data-bs-placement='bottom'
          title='Add to favorites'
        >
          <i class='bi bi-star'></i>
        </button>
        <button
          type='button'
          class='btn btn-dark m-1'
          data-bs-toggle='tooltip'
          data-bs-placement='bottom'
          title='Remove from favorites'
        >
          <i class='bi bi-trash'></i>
        </button>
      </div>
    </div>
  )
}

export default Content
