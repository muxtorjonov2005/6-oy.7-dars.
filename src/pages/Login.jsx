import React, { useState } from 'react'
import '../assets/styles/Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  let [name, setName] = useState('')
  let [password, setPassword] = useState('')
  let [loading, setLoading] = useState('')

  const navigate = useNavigate()

  function validate() {

    if(!name || !password) {
      alert('Iltimos barcha maydonlarni to\'ldiring')
      return false
    }

    return true
  }

  function handleSubmit(e) {
    e.preventDefault()

    const isValid = validate()
    if(!isValid) {
      return
    }

    const user = {
      username: name,
      password: password
    }
    
    setLoading(true)

    axios.post('https://auth-rg69.onrender.com/api/auth/signin', user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
     .then((response) => {
       console.log(response.data);
       if(response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data))
        localStorage.setItem('token', response.data.accessToken)        
        navigate('/home', {state: {token: response.data.accessToken}})
       }
       
      })
      .catch((error) => {
        if(error.response?.status === 404 || error.response?.status === 401) {
          alert(error.response?.data?.message)
        }
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
    
    setName('')
    setPassword('')
  }

  return (
    <div>
      <form className='register_form' onSubmit={handleSubmit}>
        <input value={name} type="text" placeholder='Enter name' onChange={(e) => { setName(e.target.value)}} />
        <input value={password} type="password" placeholder='Enter password' onChange={(e) => { setPassword(e.target.value)}} />
        <button disabled = {loading} className='form_button'>{!loading ? 'REGISTER' : 'Waiting...'}</button>
      </form>
    </div>
  )
}

export default Login