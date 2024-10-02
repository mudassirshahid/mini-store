
import React, { useState } from 'react';

function MyForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to backend)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="border p-1 m-2"
                />
            </div>
            <div>
                <label>Email:</label>
                <input  
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="border p-1 m-2"
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="border p-1 m-2"
                />
            </div>
            <button type="submit" className="bg-slate-400 p-3 rounded-lg my-2">Submit</button>
        </form>
    );
}

export default MyForm;





// Second Way destructuring
// import React, { useState } from 'react';

// function MyForm() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });

//     const { name, email, password } = formData; // Destructure form data for easier access

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission with formData
//         console.log(formData); // You can perform further actions like sending data to a backend API
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Name:</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={name}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={email}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input
//                     type="password"
//                     name="password"
//                     value={password}
//                     onChange={handleChange}
//                 />
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// export default MyForm;
