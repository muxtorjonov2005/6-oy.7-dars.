import React, { useState } from 'react'
import '../assets/styles/Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [confirmPass, setConfirmPass] = useState('')
  let [loading, setLoading] = useState('')

  const navigate = useNavigate()

  function validate() {
    if(!name || !email || !password || !confirmPass) {
      alert('Iltimos barcha maydonni to\'ldiring')
      return false
    }

    // if(password.length < 8) {
    //   alert('Parol kamida 8 ta belgidan ko\'p bo\'lishi kerak')
    //   return false
    // }

    if(password !== confirmPass) {
      alert('Parollar tasdiqlanmagan')
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
      email: email,
      password: password
    }
    
    setLoading(true)

    axios.post('https://auth-rg69.onrender.com/api/auth/signup', user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
     .then((response) => {
      if(response.status === 200) {
        navigate('/login')
      }
      })
      .catch((error) => {
        if(error.response.status === 400) {
          alert(error.response?.data?.message)
        }
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
    
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPass('')
  }

  return (
    <div>
      <form className='register_form' onSubmit={handleSubmit}>
        <input value={name} type="text" placeholder='Enter name' onChange={(e) => { setName(e.target.value)}} />
        <input value={email} type="email" placeholder='Enter email' onChange={(e) => { setEmail(e.target.value)}}/>
        <input value={password} type="password" placeholder='Enter password' onChange={(e) => { setPassword(e.target.value)}} />
        <input value={confirmPass} type="password" placeholder='Confirm password' onChange={(e) => { setConfirmPass(e.target.value)}} />
        <button disabled = {loading}>{!loading ? 'REGISTER' : 'Waiting...'}</button>
      </form>
    </div>
  )
}

export default Register