import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { useLocation } from 'react-router-dom';


const SignUp = () => {
    const { createUser, loginWithGoogle } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            setError('Both fields are required');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        try {
            const userCredential = await createUser(email, password);
            console.log('User signed up:', userCredential.user);
            alert("Sign-up successful");
            navigate(from, { replace: true });
        } catch (error) {
            setError(error.message);
        }
    };

    const handleRegister = () => {
        loginWithGoogle()
            .then((result) => {
                
                alert("Sign-up successful");
                navigate(from, { replace: true });
            })
            .catch((error) => setError(error.message));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-gradient-to-r from-red-100 to-blue">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold">Sign Up Form</h1>
                        {error && <p className="text-red-500">{error}</p>}
                        <form onSubmit={handleSubmit} className="py-8 space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <p>
                                Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link>
                            </p>
                            <div className="relative">
                                <button className="bg-blue-500 text-white rounded-md px-6 py-2">Sign Up</button>
                            </div>
                        </form>
                        <hr />
                        <div className='flex w-full items-center flex-col mt-5 gap-3'>
                            <button onClick={handleRegister} className='flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300'>
                            <img
      src="https://bpando.org/wp-content/uploads/New-Google-Chrome-Logo-BPO.jpg"
      className="w-6 h-6"
      alt="Google Logo"
    /> Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
