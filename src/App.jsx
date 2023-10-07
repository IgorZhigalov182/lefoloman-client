import { useState } from 'react';
import '../src/styles/App.css';
import Map from './components/ui/map/Map';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      {/* Navbar */}
      <Map />
    </div>
  );
}

export default App;
