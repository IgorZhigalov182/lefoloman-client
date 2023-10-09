import { useState } from 'react';
import '../src/styles/App.css';
import Map from './components/ui/map/Map';
import MainLayout from './layout/main/MainLayout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      {/* Navbar */}
      {/* <Map /> */}
      <MainLayout />
    </div>
  );
}

export default App;
