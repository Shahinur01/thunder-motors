import React, { useContext, useState } from 'react'
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'
import { auth } from './firebase'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import { UserContext } from '../../App'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const signIn = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        const signedInUser = { name: userAuth.user.displayName, email: userAuth.user.email };
        setLoggedInUser(signedInUser)
        
        history.replace(from);
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className='login'>
      
      <div className='login__info'>
        <h1>Sign In</h1>
        <form className='login__form'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name='Sign In' type='submit' onClick={signIn} />
        </form>
        <div className='login__divider'>
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to='/signup'>
          <ButtonSecondary name='create account' />
        </Link>
      </div>
    </div>
  )
}

export default Login;