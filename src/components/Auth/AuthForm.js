import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailinputref=useRef();
  const passwordinputref=useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isloading,setIsLoading]=useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredemail=emailinputref.current.value;
    const enteredpassword=passwordinputref.current.value;
    setIsLoading(true)
    if(isLogin){

    }
    else{
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCtCyEzO4kf9Jte6nELEcariOofMR80IzE',
      {
        method:'POST',
        body:JSON.stringify({
          email:enteredemail,
          password:enteredpassword,
          returnsecuretoken:true
        }),
        headers:{
          'Content-Type':'application/json'
        }
      }).then(res=>{
        setIsLoading(false)
        if(res.ok){

        }
        else{
          return res.json().then(data=>{
            let errormessage='authentication failed';
             console.log(errormessage)
          })
        }
      })
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailinputref}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required ref={passwordinputref}
          />
        </div>
        <div className={classes.actions}>
          {!isloading && <button
            type='submit'
            className={classes.toggle}
          >
            {isLogin ? 'LOGIN' : 'CREATE ACCOUNT'}
          </button>}
          {isloading && <p>sending request</p>}
          </div>

        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
