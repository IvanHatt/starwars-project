import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Spinner from './Spinner'
import Film from './Film'
import Home from './Home'

const Content = () => {
  let location = useLocation()
  const [film, setFilm] = useState([])
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

  return (
    <div className='content'>
      {location.pathname === '/' ? (
        <Home />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <Film film={film}></Film>
      )}
    </div>
  )
}

export default Content
