import { useState } from "react"


const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <form action="" className="form-elements">
      <h2>Register</h2>
      <label htmlFor="username">Username: </label>
      <input type="text" id="username" 
      placeholder="Enter new username" 
      value={username}
      onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="password">Password: </label>
      <input type="text" id="password" 
      placeholder="Enter password" 
      value={password}
      onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" className="nav-buttons-home">register</button>
    </form>
  )
}

export default Register
