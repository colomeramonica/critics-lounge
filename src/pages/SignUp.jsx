import React, { useState } from 'react';
import { useEarthoOne } from '@eartho/one-client-react';
import TextInput from '../components/TextInput';
import { EmailIcon, LockIcon, UserIcon } from '../components/Icons';

function SignUp() {
  const [isSignIn, setIsSignIn] = useState(true);

  const {
    isLoading,
    isConnected,
    error,
    user,
    connectWithPopup,
    logout,
  } = useEarthoOne();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-2 justify-between min-h-screen max-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center md:w-1/2 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h2>
        <form className="flex flex-col gap-4 w-full">
          {!isSignIn && (
            <TextInput label="Name" icon='user' type="text" placeholder="Enter your name" />
          )}
          <TextInput label="Email" icon="email" type="email" placeholder="Enter your email" />
          <TextInput label="Password" icon="lock" type="password" placeholder="Enter your password" />
          <button type="submit" className="p-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            {isSignIn ? 'Don\'t have an account?' : 'Already have an account?'}{' '}
            <button onClick={toggleForm} className="text-blue-500 hover:underline">
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
      <div className="md:block md:w-1/2 bg-blue-500 flex flex-col items-center justify-center w-full h-full">
        <img href="/" src="https://i.pinimg.com/736x/c0/4e/1c/c04e1c2d288c55cc147de7878b8fd6c5.jpg" alt="Aura" />
      </div>
    </div>
  );
}

export default SignUp;