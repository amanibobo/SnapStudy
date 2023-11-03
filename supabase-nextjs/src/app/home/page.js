"use client"
import Link from 'next/link';
import {createRef} from 'react'



const notes = [
  { name: 'Note 1', subject: 'Math', date: '2023-10-26' },
  { name: 'Note 2', subject: 'Science', date: '2023-10-25' },
  // Add more notes here
];

const home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  };

  const noteCardStyle = {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    width: '300px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const addButtonStyle = {
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    fontSize: '24px',
    cursor: 'pointer',
  };



  return (
    <div style={containerStyle}>
      <nav style={navStyle}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/note">Notes</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <h1>Home Page</h1>
      <div style={containerStyle}>
        {notes.map((note, index) => (
          <div key={index} style={noteCardStyle}>
            <h2>{note.name}</h2>
            <p>Subject: {note.subject}</p>
            <p>Date Added: {note.date}</p>
          </div>
        ))}
      </div>
      <Link href="/note">
        <button  style={addButtonStyle}>+</button>
      </Link>
    </div>
    
  );
};

export default home;


/*import { createRef } from "react";
import Link from "next/link";

const notes = [
  // ... your notes data
];

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 bg-teal-200">
      <nav className="mb-4 space-x-4">
        <Link href="/notes"><a className="text-blue-500 hover:underline">Notes</a></Link>
        <Link href="/login"><a className="text-blue-500 hover:underline">Login</a></Link>
      </nav>
      
      <h1 className="text-2xl font-bold mb-6">Hello user!</h1>
      <h2 className="text-xl mb-4">How may we assist you today?</h2>

      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
        {notes.map((note, index) => (
          <div key={index} className="flex flex-col p-4 border-2 border-gray-300 shadow-md">
            <h3 className="mb-2 font-medium">{note.title}</h3>
            <p className="mb-2 text-sm text-gray-600">Date: {note.date}</p>
            <p className="mb-2 text-sm text-gray-600">Subject: {note.subject}</p>
            <p className="text-sm text-gray-600">Length: {note.length}</p>
          </div>
        ))}
      </div>

      <Link href="/note">
        <a className="flex items-center justify-center w-full max-w-sm mt-4 p-2 text-white bg-blue-500 hover:bg-blue-600">
          Add Note
        </a>
      </Link>

      <button className="flex items-center justify-center w-full max-w-sm mt-4 p-2 text-white bg-blue-500 hover:bg-blue-600">
        Logout
      </button>
    </div>
  );
}

export default HomePage;
*/