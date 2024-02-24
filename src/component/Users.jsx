import React, { useDebugValue } from 'react'
import { userData } from './hooks/UsersData.js'

const Users = () => {
  return (
    <>
      <div>
        <h1>Users</h1>
        <ul>
          {userData.map((user, indx) => {
            return (
              <div key={user.indx}>
                <li>{user.name} </li>
                <li>{user.age} </li>
                <li>{user.gender} </li>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Users
