import { useState } from 'react';

function App() {
  const [name, setName] = useState("Rahul");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>

      <button onClick={() => setName("Amit")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}

export default App;