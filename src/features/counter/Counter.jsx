import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice';
import { selectCount } from './CounterSelector';

const Counter = () => {
  const count = useSelector(selectCount);
  const [amount,setAmount] = useState(0);
  const dispatch = useDispatch();
  const handleClick = (type = 'INCREMENT') => {
    if(type === 'INCREMENT'){
      dispatch(increment());
    } else if(type === 'INCAMUOUNT'){
      dispatch(incrementByAmount(amount));
    } else {
      dispatch(decrement());
    }
  }
  return (
    <>
      <button onClick={() => handleClick('DECREMENT')}>
        -
      </button>
      <div>{count}</div>
      <button onClick={() => handleClick('INCREMENT')}>
        +
      </button>
      <input type='number' onChange={(e)=>setAmount(e.target.value)}/>
      <button onClick={() => handleClick('INCAMUOUNT')}>
        Increment By Amount
      </button>
    </>
  )
}

export default Counter