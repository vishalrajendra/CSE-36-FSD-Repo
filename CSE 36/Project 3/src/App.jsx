function add(a, b) {
  return a + b;
}

function Welcome() {
  return <h2>Hello, World!</h2>;
}

function Info() {
  return <h2>This is a simple React application.</h2>;
}

// Main App Component
function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Your First React Component</h1>

      {/* Using Component */}
      <Welcome />
      <Info />

      <h3>How to use Component?</h3>
      <p>Use component like HTML tag: &lt;Welcome /&gt;</p>

      <h3>Difference between Function and Component</h3>
      <p>Normal Function Result: {add(10, 20)}</p>

      <h3>Interview Question</h3>
      <p><b>Q:</b> What is a React Component?</p>
      <p><b>A:</b> A reusable UI block written as a function or class.</p>
    </div>
  );
}

export default App;