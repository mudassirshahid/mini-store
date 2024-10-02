import React from 'react'
import { useGlobalContext } from '../UseContext/UseContext.jsx'


const UserContext = () => {

    const {userData, students} = useGlobalContext();
  return (
    <div>
      <p className='text-center text-lime-600 text-1xl'>My name is {userData.name} and my email is {userData.email}</p>
      <h2 className='text-center text-lime-600 text-3xl my-5'>Students</h2>
            <ul>
                {students.map(student => (
                    <li key={student.rollNo}>
                        {student.name} - {student.email}
                    </li>
                ))}
            </ul>  
    </div>
  )
}

export default UserContext
