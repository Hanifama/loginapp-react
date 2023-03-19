import React, { useEffect, useState } from 'react'
import style from  "./Header.module.scss"
// import { Container } from 'reactstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {FaTimes, FaUserCircle} from "react-icons/fa"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {HiOutlineMenuAlt3} from "react-icons/hi"
import { auth } from '../../firebase/Config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice'
import ShowOnLogin, { ShowOnLogout } from '../hiddenLink/Hidden'




// const navLinks = [
//     {
//         display: 'Home',
//         url: '/'
//     },
//     {
//         display: 'About',
//         url: '#'
//     },
//     {
//         display: 'Menu',
//         url: '#'
//     },
//     {
//         display: 'Recipes',
//         url: '#'
//     },
//     {
//         display: 'Contact',
//         url: '/contact'
//     },
// ]

 const logo =(
    <div className={style.logo}>
        <Link to='/'>
            <h2> PT. <span>LSKK</span> </h2>
            
        </Link>
    </div>
 )

 const cart =(
    <span className={style.cart}>
        <Link to="/cart">
            <AiOutlineShoppingCart size={20}/>
            <p>0</p>
        </Link>
    </span>
 )

 const aktifling=(
    ({isActive}) => (isActive ? `${style.active}` : "")
 )

const Header = () => {
    // const {navbar, setShowNavbar} = useState(false)
    const [showMenu, setShowMenu] = useState(false);
    const [displayName, setdisplayName] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch()

    // const changeBackground = () =>{
    //     if(window.scrollY >= 88){
    //         setShowNavbar(true)
    //     }else{
    //         setShowNavbar(false)
    //     }
    // }
    
    // window.addEventListener('scroll', changeBackground)

    const logoutUser = () => {
        signOut(auth).then(() => {
            toast.success("Logout Berhasi..")
            navigate("/")
          }).catch((error) => {
           toast.error(error.message)
          });
     }
    
     //monitor user
     useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            //   console.log(user)
            //   const uid = user.uid;
            //   console.log(user.displayName)
            if(user.displayName==null){
                const u1 = user.email.substring(0, user.email.indexOf("@"));
                // console.log(u1);
                const uName = u1.charAt(0).toUpperCase() + u1.slice(1)
                // console.log(uName);
                setdisplayName(uName)
            }else{
                setdisplayName(user.displayName)
            }
             
              dispatch(SET_ACTIVE_USER({
                email:user.email,
                userName:user.displayName ? user.displayName : displayName ,
                userID:user.uid,
              }))

            } else {
              setdisplayName("");
              dispatch(REMOVE_ACTIVE_USER())
            }
          });
     }, [dispatch, displayName])

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    };

    const hideMenu = () => {
        setShowMenu(false)
    };    

  return (
    <header> 
        <div className={style.header}>
            {logo}
            <nav 
                    // Class_show-hide nav
                className={
                    showMenu ? 
                    `${style["show-nav"]}` : `${style["hide-nav"]}`
                }>

                    {/* Class_hide-show */}
                <div 
                  className={
                    showMenu ? 
                    `${style["nav-wrapper"]}  ${style["show-nav-wrapper"]}` 
                    : `${style["nav-wrapper"]}`
                    }
                    onClick = {hideMenu}
                    >
                </div>
                    {/* End Class_hide-show */}

                    {/* Nav_UL */}
                    <ul onClick={hideMenu}>
                        <li className={style["logo-mobile"]}>
                            {logo}
                            <FaTimes size={22} color="#fff" onClick={hideMenu}/>
                        </li>
                        <ShowOnLogin>
                            <li>
                                <NavLink to='/' className={aktifling}>
                                    Beranda
                                </NavLink>
                            </li> 
                            <li>
                                <NavLink to='/Layanan' className={aktifling}>
                                    Tekido
                                </NavLink>
                             </li>          
                        </ShowOnLogin>
                        <ShowOnLogout>
                            <li>
                                <NavLink to='/' className={aktifling}>
                                    Beranda
                                </NavLink>
                            </li> 
                            <li>
                                <NavLink to='/Layanan' className={aktifling}>
                                    Tekido
                                </NavLink>
                             </li>  
                            <li>
                                <NavLink to='/Layanan' className={aktifling}>
                                    Layanan
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to='/Layanan' className={aktifling}>
                                    Hubungi
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Layanan' className={aktifling}>
                                    About
                                </NavLink>
                            </li>
                        </ShowOnLogout>
                        
                       
                    </ul>
                    {/* End Nav_UL */}

                {/* Header-right */}
                    <div className={style["header-right"]} onClick={hideMenu}>

                    {/* Span-links */}
                    <span className={style.links}>
                        <ShowOnLogout>
                        <NavLink to="/login" >
                        Login
                        </NavLink>
                        </ShowOnLogout>
                        <ShowOnLogin>
                        <a href="#home">
                          <FaUserCircle size={16}/>
                          Hi, {displayName}  
                        </a>
                        <NavLink to="/order-history" >
                        My Order
                        </NavLink>
                        <NavLink to="/" onClick={logoutUser}>
                        Logout
                        </NavLink>
                        </ShowOnLogin>
                    </span>   

                    {/* Span cart */}
                    {cart}
                
                    </div>
                {/* End Header-right */}
                
            </nav>

            {/* Menu Icon */}
            <div className={style["menu-icon"]}>
                {cart}
                <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
            </div>
            {/* End Menu Icon */}
        </div>


        {/* <Container>
            <div className="navigation">

                <div className="logo">
                    <h2 className='d-flex align-items-center gap-1'>
                        <span><i class="ri-store-3-line"></i></span>Ivantory
                    </h2>
                </div>

                <div className="nav__menu">

                    <div className="nav__list__wrapper d-flex align-items-center justify-content-between">

                    <ul className='nav__list'>
                        {
                            navLinks.map((item,index)=>(
                                <li className='nav__item' key={index}>
                                    <a href={item.url}>{item.display}</a>
                                </li>
                    
                            ))
                        }
                    </ul>
                    <div className="menu__right">
                        <div className="custom__search">
                            <input type="text" placeholder='Search here' />
                            <span><i class="ri-search-line"></i></span>
                        </div>
                    </div>

                    </div>

                </div>

                

                <div className="mobile__menu">
                    <span><i class="ri-menu-line"></i></span>
                </div>

            </div>
        </Container> */}
    </header>
  )
}

export default Header