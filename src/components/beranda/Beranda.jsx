import React from 'react'
import style from './Beranda.module.scss'
import tekido from "../../assets/images/tekidog.png"

const Beranda = () => {
  return (
    <section className={style.section}>

      <div className={style.content}>

        <div className={style.leftc}>
        <p>MENYAMBUT KEDATANGAN <span>TEKNOLOGI</span> DENGAN</p>
        <h1>T E K I D O </h1>
        <p>PRODUK KAMI YANG AKAN MEMBANTU KAMU LEBIH DEKAT DAN MENGENAL 
          KONSEP TEKNOLOGI INTERNET OF THINK</p>
        </div>

        <div className={style.blur}>
        <div className={style.img}>
              <img src={tekido} width={350} height={350} alt="" />
        </div>
        </div>
      </div>
    
    </section>
  )
}

export default Beranda