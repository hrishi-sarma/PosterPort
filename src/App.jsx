import { useState, useEffect } from 'react';
import './App.css';
import Name from './name';
import LoadingScreen from './LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate a loading delay, remove or adjust as necessary
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds for demonstration

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      {loading ? <LoadingScreen /> : <Name />}
    </>
  );
}

export default App;
