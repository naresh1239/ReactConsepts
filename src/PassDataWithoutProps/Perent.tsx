import React from 'react';
import Child from './Child';
import {emitter} from './Emiter'

const Perent = () => {
  // Create emitter instance

  const emiterfn = () => {
    console.log('vikas');
    emitter.emit('event', 5, 10);  // Emit event with data
  }

  return (
    <div>
      App
      <button onClick={emiterfn}>Click Me</button>
      <Child />  {/* Pass emitter instance to Child */}
    </div>
  );
}

export default Perent;
