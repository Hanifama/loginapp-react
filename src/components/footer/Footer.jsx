import React from 'react'
import style from "./Footer.module.scss"
import { Link } from 'react-router-dom'
import {GrInstagram} from 'react-icons/gr'
import {BsYoutube} from 'react-icons/bs'
import {AiFillTwitterSquare, AiFillFacebook} from 'react-icons/ai'



const date = new Date()
const year = date.getFullYear()
const Footer = () => {
  return (
    <footer>
    <div className={style.footer__container}>

        <div className={style.footer__1}>
            <Link to='/course' className={style.footer__logo}>
                 <h1>PT. LSKK</h1>
                 <hr />
                 <h5>Langgeng Sejahtera Kreasi Komputasi</h5>
            </Link>
            <h4>Kantor Utama</h4>
            <p>Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263, Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40264</p>
        </div>

        <div className={style.footer__2}>
          <h4>Kantor WorkShop</h4>
            <p>Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263,
              Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40264</p> 
        </div>

        <div className={style.footer__3}>
        <h4>Telusuri disini</h4>
        <ul className={style.privacy}>
            <li>
            <Link to='/' className={style.footer__logo}>
                 Beranda
            </Link>
            </li>
            <li>
            <Link to='/layanan' className={style.footer__logo}>
                 Layanan
            </Link>
            </li>
            <li>
            <Link to='/tekido' className={style.footer__logo}>
                 Tekido
            </Link>
            </li>
            <li>
            <Link to='/tentang' className={style.footer__logo}>
                 Tentang Kami
            </Link>
            </li>
            <li>
            <Link to='/contact' className={style.footer__logo}>
                 Hubungi Kami
            </Link>
            </li>
        </ul>
        </div>

        <div className={style.footer__4}>
        <h4>Contact us</h4>
            
            <div>
                <p>(022) 1234567</p>
                <p>pt.lskk@gmail.com</p>
            </div>
        <ul className={style.footer__socials}>
            <li>
            <Link to='/course'>
                 <AiFillFacebook/>
            </Link>
            </li>
            <li>
            <Link to='/course'>
                 <AiFillTwitterSquare/>
            </Link>
             </li>
            <li>
            <Link to='/course'>
                 <BsYoutube/>
            </Link>
            </li>
            <li>
            <Link to='/course'>
                 <GrInstagram/>
            </Link>
            </li>
        </ul>
        </div>
    </div>
    
      <div className={style.footer__copyright}>  
           <small>Copyright  &copy; {year} All Right Reserved PT. LSKK</small> 
      </div>
</footer>
    // <div className={style.footer}>
    //   &copy; {year} All Right Reserved
    // </div>
  )
}

export default Footer