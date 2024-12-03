import * as React from 'react';

// interface Ipros {
//   handleChange: () => void;
//   count: number;
// }
export default function ChildButton(props) {
  const { handleChange, count } = props;
  return (
    <button
      className={'btn ms-1 btn-sm btn-outline-primary'}
      onClick={() => handleChange()}
    >
      {count}
    </button>
  );
}
