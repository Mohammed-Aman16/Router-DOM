import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    let {id} = useParams();
  return (
    <div>
      <h1>ID: {id}</h1>
      <h3>Baigan</h3>
    </div>
  )
}

export default User
