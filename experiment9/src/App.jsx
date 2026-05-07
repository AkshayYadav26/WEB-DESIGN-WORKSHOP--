import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]); // array to store multiple registrations

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    // Add new user to the array
    setUsers([...users, { name, email, password }]);

    // Clear inputs after registration
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ 
      display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" 
    }}>
      <div className="mainbox">
        <h1 style={{ fontSize: "32px", textAlign: "center" }}>REGISTRATION FORM</h1>

        <div className="inputbox" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input style={{ fontSize: "17px" }} placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input style={{ fontSize: "17px" }} placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input style={{ fontSize: "17px" }} type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "30px" }}>
          <button onClick={handleRegister}>Register</button>
        </div>

        <div className="showbox" style={{ textAlign: "center" }}>
          <h2>Registered Users</h2>
          {users.map((user, index) => (
            <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <p><b>Name:</b> {user.name}</p>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Password:</b> {user.password}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
