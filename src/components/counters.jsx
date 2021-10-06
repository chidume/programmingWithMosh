import React from 'react';
import Counter from './counter';
import '../styles/index.css';

function Counters(props) {
  console.log('Counters - Rendered');

  const {onReset, counters, onDelete, onIncrement} = props;

  return (
    <div>
      <button className={"reset"} onClick={onReset}>Reset</button>
      {counters.map(counter =>
        <Counter 
          key={counter.id} 
          onDelete={onDelete} 
          onIncrement={onIncrement}
          counter={counter}
        />
      )} 
    </div>
  );
}

export default Counters;