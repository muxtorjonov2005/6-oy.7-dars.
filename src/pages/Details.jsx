import React from 'react'
import {useLocation, useParams} from 'react-router-dom'

function Details() {
    const params = useParams()
    const location = useLocation()
    
  return (
    <div>Details</div>
  )
}

export default Details