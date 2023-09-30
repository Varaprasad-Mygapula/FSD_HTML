import React from 'react';
const Dudee = () => {
  const showAlert = () => {
    alert('Button Clicked!');
  };

  return (
    <div>
      <button onClick={showAlert}>Click me</button>
    </div>
  );
};

export default Dudee;