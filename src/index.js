import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    React.createElement('button', {
      onClick: () => console.log('CLICK')
    }, 'Нажми меня'),
  document.getElementById('root')
);
