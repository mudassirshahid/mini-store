import React, { useState } from 'react'

const FormData = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleFormData = (e) => {
        const name = e.target.name
        const value = e.target.value
        // console.log(name,value);
        setFormData((prev) => {
            return {...prev, [name] : [value]}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Name: ${formData.name}`);
        console.log(`Email: ${formData.email}`);
        console.log(`Password: ${formData.password}`);
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleFormData}
                    className="border p-1 m-2"
                />
            </div>
            <div>
                <label>Email:</label>
                <input  
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleFormData}
                    className="border p-1 m-2"
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name='password'
                    value={formData.password}
                    onChange={handleFormData}
                    className="border p-1 m-2"
                />
            </div>
            <p>{`My name is ${formData.name} and my email is ${formData.email}`}</p>
            <button type="submit" className="bg-slate-400 p-3 rounded-lg my-2">Submit</button>
        </form>
     </div>
  )
}

export default FormData
