import React, { useState } from 'react'
import style from "./auth.module.scss"
import resetImg from '../../assets/images/forgot.png'
import { Link } from 'react-router-dom';
import { Card } from './../index';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/Config';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';

const Reset = () => {
  const [email, setEmail] = useState("")
  const [isLoader, setIsLoader] = useState(false)

  const resetPassword = (e) => {
    e.preventDefault();
    
    setIsLoader(true)

    sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success("Cek pesan email anda untuk reset email")
      setIsLoader(false)
    })
    .catch((error) => {
      setIsLoader(false)
      toast.error(error.message)
    });
  }

  return (
    <>
    {isLoader && <Loader/>}
    <section className={`container ${style.auth}`}>

        {/* Class_utk-img */}
        <div className={style.img}>
          <img src={resetImg} alt="Reset Password" width="400" />
        </div>
        {/* N Class_utk-img */}


        {/* Class_utk-style.form */}
        <Card>
        <div className={style.form}>
          <h2>Reset</h2>
          
        {/* form */}
        
          <form onSubmit={resetPassword}>
            
        {/*input */}
            <input 
            type="email" 
            placeholder='Email' 
            required 
            value={email}  
            onChange={(e) => setEmail(e.target.value)}
            />
        {/* N input */}
        
        {/* Button login */}
            <button type='submit' className='--btn --btn-primary --btn-block'>Reset Password</button>

            
        {/* Class_utk-link */}
            <div className={style.links}>
              <p>
              <Link to="/login">
                -  Login
              </Link>
              </p>
              <p>
              <Link to="/register">
                -  Register 
              </Link>
              </p>
            </div>
        {/* N Class_utk-ling */}
          </form>
        {/* N Form */}


        </div>
        {/* N Class_utk-style.form */}
        </Card> 
    </section>
    </>
  )
}

export default Reset