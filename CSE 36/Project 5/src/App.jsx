import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { About , Contact } from './Components/Info';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Import and Export Components Example</h1>
      <Header />
      <Footer />
      <About />
      <Contact />
    </div>
  );
}

export default App;