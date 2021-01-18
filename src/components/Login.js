import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

  const dispatch = useDispatch()

  const username = useSelector(state => state.username)
  const password = useSelector(state => state.password)

  const changeData = e => {
    e.preventDefault()
    dispatch({type: `CHANGE_${(e.target.id).toUpperCase()}`, payload: e.target.value})
  }
  
  const sumbit = e => {
    e.preventDefault()
    dispatch({type: 'LOGIN', payload: {username, password}})
  }
  return (
    <div className="form-wrapper">
      <form className="form">
        <h2 className="form-title">Авторизация</h2>
        <div className="form-group">
          <label>Логин: </label>
          <input id="username" onChange={changeData}></input>
        </div>
        <div className="form-group">
          <label>Пароль: </label>
          <input id="password" onChange={changeData}></input>
        </div>
        <p id="auth-error" className="auth-error"></p>
        <button className="form-btn" onClick={sumbit}>Войти</button>
      </form>
    </div>
  )
}


export default Login