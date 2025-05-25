import React, { useState, useEffect } from 'react'

const Counter = ({ initialValue }) => {

    const [ count, setCount ] = useState(initialValue);
    const [ lastAction, setLastAction ] = useState(null);

    useEffect(() => {

        document.title = `Contador: ${count}`;
        return () => {
            document.title = 'React App'
        };
    }, [count]);

    const increment = () => {  
        setCount(prevCount => prevCount + 1);
        setLastAction('incremento');
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
        setLastAction('decremento');
    }

    const reset = () => {
        setCount(initialValue);
        setLastAction('reincio');
    }


  return (
    <div className='counter'>
        <h2>Componente contador</h2>
        <p>Valor actual: {count}</p>
        {lastAction && <p>última acción: {lastAction}</p>}

        <div className="counter-buttons">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Rs</button>
        <button onClick={increment}>+</button>
      </div>
      
    </div>
  )
}

export default Counter
