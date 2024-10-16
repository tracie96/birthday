import React from 'react';
import './App.css';
import sketch from './sketch';
import p5 from 'p5';

const TEXT = 'Happy Birthday Pookie';

const App = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvasDivElement = canvasRef.current;
    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
  }, []);

  return (
    <div className="main">
      {/* P5.js Canvas */}
      <div ref={canvasRef} />
      <div className="text-section">
        <p>You mean the world to me and I love you so so much - Tracy</p>
      </div>    </div>
  );
}

export default App;
