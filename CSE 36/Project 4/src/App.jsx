function App() {
  const username = "raj kumar";
  let x = 10;
  let y = 20;

  return (
    <>
      <h1>{username}</h1>
      <h1>{10 + 20 + 30}</h1>
      <h1>{x + y}</h1>
      <button onClick={() => alert("Hello")}>click me</button>
    </>
  )
}

export default App