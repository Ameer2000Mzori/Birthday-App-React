import React, { useState, useRef, useCallback } from 'react'
import { userData } from './hooks/UsersData.js'

const Users = () => {
  const [users, setUsers] = useState(userData)
  const userTitle = useRef(null)

  const resetUsers = useCallback(() => {
    userTitle.current.textContent = 'Users'
    setUsers(userData)
  }, [userData])

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
        {users.length > 1 ? (
          <button
            onClick={() => {
              setUsers([])
              userTitle.current.textContent = 'users removed successfully'
            }}
          >
            remove all
          </button>
        ) : (
          <button onClick={resetUsers}>rest users</button>
        )}
      </div>
    </>
  )
}

export default Users
