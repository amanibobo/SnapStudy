import Link from 'next/link';

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