import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.slice(0, 5));
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setError("All fields are required!");
      setMessage("");
      return;
    }

    setError("");
    setMessage("Registration Successful!");

    const newUser = {
      name,
      email
    };

    setUsers([...users, newUser]);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">

      <div className="card">

        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Register
          </button>

        </form>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {message && (
          <p className="success">
            {message}
          </p>
        )}

        <div className="users">

          <h3>Registered Users</h3>

          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>

        </div>

      </div>

    </div>
  );
}

export default App;