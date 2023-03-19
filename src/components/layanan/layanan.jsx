import React from 'react'
import style from  "./Layanan.module.scss"

const layanan = () => {
  return (
    <section className={style.layanan}>

      <h2>Layanan</h2>
      
      <div className={style.card}>
        <div className={style.box}>
          <div className={style.content}>
            <h2>01</h2>
            <h3>Aplication Development</h3>
            <hr />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe natus exercitationem quas, 
              illum dolores quia explicabo consequatur laudantium! Magnam asperiores quaerat nihil mollitia 
              iste cumque non possimus distinctio animi excepturi facere, facilis atque nulla pariatur ab omnis illum 
              sint doloribus ad tempora reiciendis in, aliquam explicabo tenetur. Unde, iusto eligendi.</p>
          </div>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.box}>
          <div className={style.content}>
            <h2>02</h2>
            <h3>Software and Hardware</h3>
            <hr />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe natus exercitationem quas, 
              illum dolores quia explicabo consequatur laudantium! Magnam asperiores quaerat nihil mollitia 
              iste cumque non possimus distinctio animi excepturi facere, facilis atque nulla pariatur ab omnis illum 
              sint doloribus ad tempora reiciendis in, aliquam explicabo tenetur. Unde, iusto eligendi.</p>
          </div>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.box}>
          <div className={style.content}>
            <h2>03</h2>
            <h3>Bussines Analytic</h3>
            <hr />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe natus exercitationem quas, 
              illum dolores quia explicabo consequatur laudantium! Magnam asperiores quaerat nihil mollitia 
              iste cumque non possimus distinctio animi excepturi facere, facilis atque nulla pariatur ab omnis illum 
              sint doloribus ad tempora reiciendis in, aliquam explicabo tenetur. Unde, iusto eligendi.</p>
          </div>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.box}>
          <div className={style.content}>
            <h2>04</h2>
            <h3>Bengkel Teknik</h3>
            <hr />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe natus exercitationem quas, 
              illum dolores quia explicabo consequatur laudantium! Magnam asperiores quaerat nihil mollitia 
              iste cumque non possimus distinctio animi excepturi facere, facilis atque nulla pariatur ab omnis illum 
              sint doloribus ad tempora reiciendis in, aliquam explicabo tenetur. Unde, iusto eligendi.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default layanan