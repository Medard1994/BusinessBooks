import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { useLocation } from 'react-router-dom';
import googLogo from "../assets/googLogo.png";

const Login = () => {
    const { login, loginwithGoogle } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Both fields are required');
            return;
        }

        try {
            const userCredential = await login(email, password);
            console.log('User logged in:', userCredential.user);
            alert("Login Successful");
            navigate(from, { replace: true });
        } catch (error) {
            setError("Invalid email or password");
        }
    };

    const handleGoogleLogin = () => {
        loginwithGoogle()
            .then((result) => {
                
                alert("Login Successful");
                navigate(from, { replace: true });
            })
            .catch((error) => setError(error.message));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold">Login Form</h1>
                        {error && <p className="text-red-500">{error}</p>}
                        <form onSubmit={handleLogin} className="py-8 space-y-4">
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
                                Don't have an account? <Link to="/sign-up" className="text-blue-600 underline">Sign Up</Link>
                            </p>
                            <div className="relative">
                                <button className="bg-blue-500 text-white rounded-md px-6 py-2">Login</button>
                            </div>
                        </form>
                        <hr />
                        <div className='flex w-full items-center flex-col mt-5 gap-3'>
                            <button onClick={handleGoogleLogin} className='block'>
                                <img src={googLogo} className='w-12 h-12 inline-block' alt="Google Logo"/> Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
