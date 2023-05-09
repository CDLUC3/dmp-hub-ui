import React from 'react';

const HelloWorld = () => {

  function sayHello() {
    alert('Hello, Welcome to the new DMPTool v5 React based example');
  }

  return (
    <section>
      <p>This is an example React page. Click the button below to see the message.</p>
      <button onClick={sayHello}>Click me!</button>
    </section>
  );
};

export default HelloWorld;
