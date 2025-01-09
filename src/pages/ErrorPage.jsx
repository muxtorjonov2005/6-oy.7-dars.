import React from 'react'
import '../assets/styles/Error.css'
import { useNavigate } from 'react-router-dom'
import myImg from '../assets/images/sticker.webp'

function ErrorPage() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/home')
  }
  return (
    <div className='error_container'>
      <div className="error">
        <h1>404</h1>
      <p>Bunday sahifa mavjud emas edi. Tez orada qo'shilib qolsa ajab emas.</p>
      <button className='button' onClick={handleClick}>Bosh sahifaga qaytish</button>
      </div>
      <img src={myImg} alt="404" />
    </div>
  )
}

export default ErrorPage