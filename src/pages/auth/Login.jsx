import {useState} from 'react'
import style from "./auth.module.scss"
import loginimg from '../../assets/images/login.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Card } from './../index';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth} from "../../firebase/Config"
import { toast } from 'react-toastify';
import Loader from "../../components/loader/Loader"


const Login = () => {

  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoader, setIsLoader] = useState(false)

  const navigate = useNavigate()

  const loginUser = (e) => {
    e.preventDefault();
    if (password !== email){
      toast.error("Harap masukan password valid")
    }
    setIsLoader(true)

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      // const user = userCredential.user;
      // console.log(user);
      setIsLoader(false)
      toast.success("selamat login berhasil...")
      navigate("/")
      // ...
    })
    .catch((error) => {
      setIsLoader(false)
      toast.error(error.message)
    }); 
  }
  
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // const user = result.user;
      toast.success("Login Berhasil")
      navigate("/")
    }).catch((error) => {
      toast.error(error.message)
    });

  }
  return (
    <>
    {isLoader && <Loader/>}
    <section className={`container ${style.auth}`}>

        {/* Class_utk-img */}
        <div className={style.img}>
          <img src={loginimg} alt="Login" width="400" />
        </div>
        {/* N Class_utk-img */}


        {/* Class_utk-style.form */}
        <Card>
        <div className={style.form}>
          <h2>Login</h2>
          
        {/* form */}
          <form onSubmit={loginUser}>
            
        {/*input */}
            <input type="email"
            placeholder='Email' 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" 
            placeholder='Password'
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          <label className={style.icon}><FaEye size={19} /></label>
        
        {/* N input */}
        
        {/* Button login */}
            <button type='submit' className='--btn --btn-primary --btn-block'>Login</button>

            
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


        {/* Button login gogel */}
            <button className='--btn --btn-danger --btn-block' onClick={signInWithGoogle}> <FaGoogle color="#fff"/>  Login with Goggle</button>
            
        {/* Register */}
            <span className={style.register}>
              <p>dont have an account? </p>
              <Link to="/register">
               Register
              </Link>
            </span>
        {/* N register */}

        </div>
        {/* N Class_utk-style.form */}
        </Card> 
    </section>
    </>
)
  
};

export default Login