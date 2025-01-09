import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    function handleClick() {
        let user = {
            id: 45,
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '1234567890'
        }

        navigate('/details/45', {state: user})
    }
  return (
    <div>
        <button onClick={handleClick}>Go to details</button>
    </div>
  )
}

export default Home