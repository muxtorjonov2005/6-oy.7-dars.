import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/styles/Home.css'

function Home() {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/about')
  }
  return (
    <div className='home_container'>
      <h2>Foydalanuvchilar haqida ma'lumot</h2>
      <button onClick={handleClick} className='homeButton'>Bloglarga o'tish</button>
    </div>
  )
}

export default Home