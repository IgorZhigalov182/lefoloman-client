import { useEffect, useState } from 'react';
import '../src/styles/App.css';
import Map from './components/ui/map/Map';
import MainLayout from './layout/main/MainLayout';
import { useDispatch } from 'react-redux';
import { getBranches } from './services/actions';

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getBranches());
  // }, []);

  return (
    <div className="container">
      {/* Navbar */}
      {/* <Map /> */}
      <MainLayout />
    </div>
  );
}

export default App;
