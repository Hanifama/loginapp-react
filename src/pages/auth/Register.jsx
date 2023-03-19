import React, { useState } from 'react'
import style from "./auth.module.scss"
import registerimg from '../../assets/images/register.png'
import { Link, useNavigate } from 'react-router-dom';
import { Card } from './../index';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/Config"
import { toast } from 'react-toastify';
import Loader from "../../components/loader/Loader"



const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [isLoader, setIsLoader] = useState(false)

  const navigate = useNavigate()

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword){
      toast.error("Harap masukan password valid")
    }

    setIsLoader(true)

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      setIsLoader(false)
      toast.success("Selamat Register Berhasil...")
      navigate("/login")
      // ...
    })
    .catch((error) => {
      toast.error(error.message);
      setIsLoader(false)
      // ..
    });

  }


  return (
    <>
    {isLoader && <Loader/>}
      <section className={`container ${style.auth}`}>

        {/* Class_utk-style.form */}
        <Card>
          <div className={style.form}>
            <h2>Register</h2>
            
          {/* form */}
          
            <form onSubmit={registerUser} >
              
          {/*input */}
              <input 
                type="email" 
                placeholder='Email' 
                required 
                value={email}  
                onChange={(e) => 
                setEmail(e.target.value)}
              />
              <input 
              type="password" 
              placeholder='Password' 
              required
              value={password}  
              onChange={(e) => 
              setPassword(e.target.value)}
              />
              <input 
              type="password" 
              placeholder='Confirm Password' 
              required 
              value={cPassword}  
              onChange={(e) => 
              setCPassword(e.target.value)}
              />
          {/* N input */}
          
          {/* Button register */}
              <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>

              
          {/* Class_utk-link */}
              <div className={style.links}>
                <Link to="/reset">
                  Reset Password
                </Link>
              </div>
          {/* N Class_utk-ling */}
              <p>-- or --</p>
            </form>
          {/* N Form */}


            
          {/* Login */}
              <span className={style.register}>
                <p>Already an account? </p>
                <Link to="/login">
                  Login
                </Link>
              </span>
          {/* N Login */}

          </div>
          {/* N Class_utk-style.form */}
        </Card> 
        

        {/* Class_utk-img */}
        <div className={style.img}>
          <img src={registerimg} alt="Register" width="400" />
        </div>
        {/* N Class_utk-img */}


      </section>
    </>
  )
}

export default Register