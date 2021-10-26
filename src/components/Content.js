import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'
import Spinner from './Spinner'
import Film from './Film'
import Home from './Home'
import FavsList from './FavsList'

const Content = () => {
  let location = useLocation()
  const [film, setFilm] = useState([])
  const [favs, setFavs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFilm = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://swapi.dev/api/films${location.pathname}`
      )

      setFilm(result.data)
      setIsLoading(false)
    }

    fetchFilm()
  }, [location])

  useEffect(() => {
    const favsStored = JSON.parse(localStorage.getItem('favorites-list'))
    setFavs(favsStored)
  }, [setFavs])

  const addFav = (film) => {
    const newFavList = [...favs, film]
    setFavs(newFavList)
    saveToLocalStorage(newFavList)
  }

  const saveToLocalStorage = (favs) => {
    localStorage.setItem('favorites-list', JSON.stringify(favs))
  }

  return (
    <div className='content'>
      <div className='d-flex justify-content-end my-5'>
        <Link
          type='button'
          className='btn btn-dark mx-5 position-relative'
          to='/favs'
        >
          <i className='bi bi-star m-1'></i> My favorites
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary'>
            {favs.length}
            <span className='visually-hidden'>number of favorites</span>
          </span>
        </Link>
      </div>
      {location.pathname === '/' ? (
        <Home />
      ) : location.pathname === '/favs' ? (
        <FavsList favs={favs} />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <Film film={film} handleFav={addFav}></Film>
      )}
    </div>
  )
}

export default Content
