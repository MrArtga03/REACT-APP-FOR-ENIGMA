import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//------------------

//Скрипт на основании вёрстки Никиты

//Условный пароль для сравнения
const conditionalPass = "0000";

const btnEnter = document.querySelector(".button_enter").addEventListener('click', () => {
  let passwordValue = document.querySelector(".password_value").value;
  
  if (passwordValue == conditionalPass) {
    alert("Welcome to the party, юный падаван");
  } else {
    alert("Назад, маслёнок, вход тебе запрещён!");
  }
});

