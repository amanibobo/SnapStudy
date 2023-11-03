"use client"

import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import {supabase} from "./supabase.js"
import {login} from "./data.js"



const LoginForm =  () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const UserData = login();
  console.log(UserData);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);

    if(password == "123"){
      Router.push('/home');
    }
  };
return (
  <div className="flex flex-col items-center justify-center
min-h-screen bg-gray-100">
    <div>
      <h1 className="w-[342px] h-[83px] text-center text-indigo-900
text-[50px] text-sm font-medium">Snap-Study</h1>
    </div>
    <div className="p-8 bg-white rounded-lg shadow-md w-96">
      <div className="flex justify-center items-center mb-6">
        <img src="C:\Users\adiva\OneDrive\Desktop\Software
Development\SnapStudy\supabase-nextjs\src\app\abstract-multi-colored-wave-pattern-shiny-flowing-modern-generated-by-ai
1.png"  className="w-24 h-24"/>
      </div>
    <h2 className='font-bold text-xl mb-4'>Log into your account</h2>
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm
font-medium text-gray-600 mb-2">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="name@example.com"
          className="w-full px-4 py-2 bg-gray-100 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600
mb-2" htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          className="w-full px-4 py-2 bg-gray-100 border rounded-md"
        />
      </div>
      <div className="mt-4 mb-4 h-[50px]">
        {/* <Link href="/home"> */}
          <button className="w-full bg-orange-500 rounded-lg shadow
h-[40px]" type="submit">Login</button>
        {/* </Link> */}
      </div>
      <div className="text-center">
          <span className="text-gray-600">OR</span>
      </div>
      <div className="mt-4">
        <button className="w-full bg-white border border-orange-500
text-orange-500 rounded-md py-2">Signup Now</button>
      </div>
    </form>
  </div>
</div>
);
};


export default LoginForm;
