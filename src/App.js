import React from 'react';
import Farewell from './components/farewell';

const App = () => {
  if(window.innerHeight > window.innerWidth){
    alert("Please rotate to get the best experience!");
}
  return (
    <div>
      <Farewell />
    </div>
  );
};

export default App;