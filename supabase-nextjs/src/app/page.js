"use client"

import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import {supabase} from "./supabase.js"





const LoginForm =  async () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  
  // const { data: UserData} = await supabase.from('UserData').select('*');
  
  
  let { data: UserData, error } = await supabase
  .from('UserData')
  .select('Username')

  console.log(UserData);

  
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   console.log('Username:', username);
  //   console.log('Password:', password);

  //   if(password == "123"){
  //     Router.push('/home');
  //   }
  // };


  return (
    <div>
      <h2 className='font-bold text-xl'>Login</h2>
      <form 
      // onSubmit={handleLogin}
      >
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <Link href="/home">
            <button className='bg-orange-500 py-1 px-4 rounded-md text-white' type="">Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;