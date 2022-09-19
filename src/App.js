import { useState } from 'react';
import './App.css';

function App() {

 const [initialHeight1, setHeight1] =  useState(50);
 const [initialHeight2, setHeight2] =  useState(50);
 const [initialHeight3, setHeight3] =  useState(50);

 const handleClick1 = (e) => {
 setHeight1(100);
 setHeight2(50);
 setHeight3(50);
 }

 const handleClick2 = (e) => {
  setHeight2(100);
  setHeight1(50);
  setHeight3(50);
  }

  const handleClick3 = (e) => {
  setHeight2(50);
  setHeight1(50);
  setHeight3(100);
  }
 

  return (
    <div className="App">
    <div className="main__Div">
    <div style={{ height: initialHeight1, backgroundColor: 'white', marginRight: '10px' }} onClick={handleClick1}>1</div>
    <div style={{ height: initialHeight2, backgroundColor: 'white', marginRight: '10px' }} onClick={handleClick2}>2</div>
    <div style={{ height: initialHeight3, backgroundColor: 'white', marginRight: '10px' }} onClick={handleClick3}>3</div>
    </div>
    </div>
  );
}

export default App;
