import React, { useState } from "react";

function App() {
 
  const [status, setStatus] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Multiple Conditional Rendering</h1>

      {/* Buttons to change state */}
      <button onClick={() => setStatus(1)}>Show Student</button>
      <button onClick={() => setStatus(2)}>Show Teacher</button>
      <button onClick={() => setStatus(3)}>Show Admin</button>

      <hr />

      {/* Multiple Conditional Rendering */}
      {status === 1 ? (
        <h2>Student Panel</h2>
      ) : status === 2 ? (
        <h2>Teacher Panel</h2>
      ) : status === 3 ? (
        <h2>Admin Panel</h2>
      ) : (
        <h2>Please select an option</h2>
      )}
    </div>
  );
}

export default App;