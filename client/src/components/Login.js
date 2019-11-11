import React from "react";
import {useState} from 'react'
import axios from "axios";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route


  const [state, setState] = useState({
    username:"",
    password: "" 
  })

  function submitHandler(e){
    e.preventDefault();
    const{ username, passowrd} = state
    axios.post('http://localhost:5000/api/login',{username,password})
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      props.history.push('/')
    })
    .catch(err => {
      console.log(err)
    })
  }

  function handleChange(e){
    const value = e.target.value
    setState({
      ...state,
      [e.target.name] : value
    })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={state.username}
          onChange={handleChange}
        />
        <br />
        <input
         type="password"
         name="password"
         placeholder="password"
         value={state.password}
         onChange={handleChange}
         />
         <br />
         <button type="submit">Sign In</button>

      </form>
    
    </>
  );
};

export default Login;
