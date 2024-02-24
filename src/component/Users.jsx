import React, { useState, useRef, useCallback } from 'react'
import { userData } from './hooks/UsersData.js'
import User from './User.jsx'
const Users = () => {
  const [users, setUsers] = useState(userData)
  const userTitle = useRef(null)

  const resetUsers = useCallback(() => {
    userTitle.current.textContent = 'Users'
    setUsers(userData)
  }, [])

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col text-center items-center justify-center bg-zinc-600 text-white">
        <h1
          ref={userTitle}
          className="w-[150px] h-[40px] bg-zinc-400 flex flex-col text-center items-center justify-center"
        >
          Users
        </h1>
        <ul className=" bg-zinc-300 p-4 w-[150px] flex flex-col text-center items-center justify-center">
          <User users={users} />
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
