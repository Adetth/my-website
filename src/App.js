import React, { useState, useEffect } from 'react';
import Farewell from './components/farewell';
import './App.css'; // Import your CSS file

const App = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth); // Initial state

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []); // Empty dependency array ensures effect runs once on component mount

  if (isPortrait) {
    return (
      <div className="app">
        <div className="toast">
          Please use Landscape mode for optimal viewing.
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Farewell />
    </div>
  );
};

export default App;
