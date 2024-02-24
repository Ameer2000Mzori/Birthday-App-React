import React, { useState, useRef } from 'react'
import { userData } from './hooks/UsersData.js'

const Users = () => {
  const [users, setUsers] = useState(userData)
  const userTitle = useRef(null)

  return (
    <>
      <div>
        <h1 ref={userTitle}>Users</h1>
        <ul>
          {users.map((user, indx) => {
            return (
              <div key={user.indx}>
                <li>{user.name} </li>
                <li>{user.age} </li>
                <li>{user.gender} </li>
              </div>
            )
          })}
        </ul>
        <button
          onClick={() => {
            setUsers([])
            userTitle.current.textContent = 'users removed successfully'
          }}
        >
          remove all
        </button>
      </div>
    </>
  )
}

export default Users
