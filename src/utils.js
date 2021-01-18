export function isLogged() {
  if (localStorage.getItem('logged')) return true
  else return false
}

export function login(username, password) {
  return new Promise((res, rej) => {
    if (username === 'Admin' &&
      password === '12345') res()
    else rej()
  })
}