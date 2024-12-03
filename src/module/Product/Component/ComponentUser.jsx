import * as React from 'react';

import { useEffect, useState } from 'react';

import ChildButton from '../../../components/ChildButton';

export default function App() {
  const [count, setCount] = useState(0);
  const [object, setObject] = useState({
    name: 'Manipulate',
    type: 'This element',
    option: 'Carefully',
  });

  useEffect(() => {}, []);

  const manipulate = () => {
    setObject((prevState) => ({
      prevState,
      name: 'soleh',
      type: prevState.type,
      option: prevState.option,
    }));
  };

  const countData = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className={'my-5 mx-3'}>
        <h1>1. Count the number</h1>
        <h6>Count the data +1 every single click: {count}</h6>
        <button
          onClick={() => countData()}
          className={'btn btn-sm btn-outline-primary'}
        >
          Count
        </button>
      </div>
      <div className={'my-5 mx-3'}>
        <h1>2. use this button to call 'countData' function</h1>
        <ChildButton handleChange={() => countData()} count={count} />
      </div>
      <div className={'my-5 mx-3'}>
        <h1>3. Disable count button if count reach 15</h1>
        <button
          disabled={count >= 15}
          className={'btn btn-sm btn-outline-primary'}
        >
          Disable this button
        </button>
      </div>
      <div className={'my-5 mx-3'}>
        <h1>4. Adding Element & Object Manipulation</h1>
        <h6>Change 'type' value below:</h6>
        <h6>
          <pre>{JSON.stringify(object, null, 3)}</pre>
        </h6>
        <button
          onClick={() => {
            manipulate();
          }}
          className={'btn btn-sm btn-outline-primary'}
        >
          Change the Data
        </button>
      </div>
    </div>
  );
}
