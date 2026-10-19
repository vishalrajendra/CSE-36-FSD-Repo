import React, { useState } from "react";

function App() {
  // Define state
  const [status, setStatus] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Multiple Conditional Rendering</h1>

      <button onClick={() => setStatus(1)}>Show Student</button>
      <button onClick={() => setStatus(2)}>Show Teacher</button>
      <button onClick={() => setStatus(3)}>Show Admin</button>

      <hr />

      {status === 1 && <h2>Welcome Student</h2>}
      {status === 2 && <h2>Welcome Teacher</h2>}
      {status === 3 && <h2>Welcome Admin</h2>}
    </div>
  );
}

export default App;