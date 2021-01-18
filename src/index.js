import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const defaultState = {
  isLogged: localStorage.getItem('logged') ? true : false,
  username: '',
  password: ''
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      if (action.payload.username === 'Admin' && action.payload.password === '12345') {
        localStorage.setItem('logged', true)
        window.location.href = 'http://localhost:3000/profile'
        return {...state, isLogged: true}
      } else {
        const authError = document.querySelector('#auth-error')
        authError.textContent = 'Имя пользователя или пароль введены не верно'
        return state
      }
    
    case "CHANGE_USERNAME":
      return {...state, username: action.payload}
    
    case "CHANGE_PASSWORD":
      return {...state, password: action.payload}

    case "IS_LOGIN":
      if (localStorage.getItem('logged')) return {...state, isLogged: true}
      else return state

    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
