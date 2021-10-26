import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'

const Toc = () => {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true)
      const result = await axios(`https://swapi.dev/api/films/`)

      setList(result.data.results)
      setIsLoading(false)
    }

    fetchList()
  }, [])

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
            {isLoading ? (
              <Spinner />
            ) : (
              list.map((film) => (
                <li className='nav-item' key={film.episode_id}>
                  <Link
                    className='nav-link'
                    to={`${film.url.split('films').pop()}`}
                  >
                    {film.title}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* <div className='toc-container'>
      
    </div> */}
    </nav>
  )
}

export default Toc
