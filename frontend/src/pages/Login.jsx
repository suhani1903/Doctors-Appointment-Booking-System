import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // You can handle login/signup logic here
    console.log({ name, email, password });
  };

  return (
    <div>
      <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-2xl font-semibold">
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </p>
          <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>

          {state === 'Sign Up' && (
            <div className="w-full">
              <p>Full Name</p>
              <input
                className="border border-zinc-300 rounded w-full pt-2 mt-2 px-2"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          )}

          <div className="w-full">
            <p>Email</p>
            <input
              className="border border-zinc-300 rounded w-full pt-2 mt-2 px-2"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div className="w-full">
            <p>Password</p>
            <input
              className="border border-zinc-300 rounded w-full pt-2 mt-2 px-2"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <button type="submit" className="bg-primary text-white w-full py-2 rounded-md text-base">
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </button>

          <p className="text-sm mt-2">
            {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span
              onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
              className="text-blue-600 cursor-pointer underline"
            >
              {state === 'Sign Up' ? 'Login here' : 'Sign up here'}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
