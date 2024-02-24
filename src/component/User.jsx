import React from 'react'

const User = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <div
          key={index}
          className="flex flex-row text-center items-center justify-evenly w-[100%] text-black"
        >
          <ul className="flex flex-row justify-between w-full">
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.gender}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default User
