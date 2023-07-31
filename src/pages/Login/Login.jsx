import React, { useRef } from 'react'

function Login() {
  return (
    <div className='Login'>
        <h1 className='title'>Log In</h1>
        <p className='info'>Quick & Simple way to Automate your payment</p>
        <input type="text" className='Email' name='Email Address' placeholder='Email Address' />
        <br/>
        <input type="password" className='Password' placeholder='Password' />
        <label htmlFor="#" className='Eye'><span><i className="bi bi-eye"></i></span></label>
        <br/>
        <input type="checkbox" href="/crossbal" className='Checkbox' />
        <a href="/crossball">Remember me</a>
        <br/>
        <a href="/crossball" className='forgot'> Forgot password?</a>
        <br/>
        <a href='/crossball' type='button' className='btn'>PROCEED</a>
    </div>
  )
}

export default Login