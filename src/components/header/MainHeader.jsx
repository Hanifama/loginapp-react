import React from 'react'
import Logo from '../../assets/images/burger1.png'
import {MdShoppingBasket} from 'react-icons/md'
import Avatar from "../../assets/images/avatar.png"

const MainHeader = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
        {/* Dekstop */}
        <div className="hidden md:flex w-full h-full items-center justify-between">

            <div className="flex items-center gap-8">
                <img src={Logo} className="w-10 object-cover" alt="logo" />
                <p className="text-black text-xl font-bold">PT.LSKK</p>
            </div>

            <div className="flex items-center gap-8">
                <ul className="flex items-center gap-8 ">
                    <li className="text-base text-black hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">Beranda</li>
                    <li className="text-base text-black hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">Layanan</li>
                    <li className="text-base text-black hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">Tekido</li>
                    <li className="text-base text-black hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">About</li>
                    <li className="text-base text-black hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">Contact</li>
                </ul>

                <div className="relative flex items-center justify-center">
                 < MdShoppingBasket className="text-black text-2xl cursor-pointer"/>
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumbg flex items-center justify-center" >
                        <p className="text-xs text-white font-semibold">2</p>
                    </div>
                </div>

                <img src={Avatar} className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl" alt="Avatar" />


            </div>

        </div>

        <div className="flex md:hidden w-full h-full"></div>
    </header>
  )
}

export default MainHeader