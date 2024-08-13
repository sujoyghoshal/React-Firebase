// Login.js
import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../firebase/firebase';
import Header from '../controller/Header';
import Footer from '../controller/Footer';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to Home page upon successful login
            window.location.href = '/';
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <Header />
            <div className="flex h-screen justify-center items-center">
                <div className="max-w-md w-full p-4 bg-white rounded shadow-md">
                    <h1 className="text-3xl font-bold mb-4">Login Form</h1>
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-2">
                            <span className="text-gray-700">Email:</span>
                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Enter your email"
                                className="w-full p-2 pl-10 text-sm text-gray-700"
                            />
                        </label>
                        <label className="block mb-2">
                            <span className="text-gray-700">Password:</span>
                            <input
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Enter your password"
                                className="w-full p-2 pl-10 text-sm text-gray-700"
                            />
                        </label>
                        {error && (
                            <div className="text-red-500 text-sm mb-2">{error}</div>
                        )}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;