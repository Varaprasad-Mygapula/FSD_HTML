import React from 'react';

function Contact() {
  const changeBackgroundColor = () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  };

  const getRandomColor = () => {
    // Generate a random color in hexadecimal format
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div className="App">
      <h1>Random Background Color</h1>
      <button onClick={changeBackgroundColor}>Change Color</button>
    </div>
  );
}

export default Contact;
