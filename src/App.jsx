import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Details from './pages/Details'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
    <div>
      <Routes>
        <Route index element= {<Home></Home>}></Route>
        <Route path='/about' element= {<About></About>}></Route>
        <Route path='/details/:id' element= {<Details></Details>}></Route>
        <Route path='/login' element= {<Login></Login>}></Route>
        <Route path='/register' element= {<Register></Register>}></Route>
        <Route path='*' element= {<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  )
}

export default App