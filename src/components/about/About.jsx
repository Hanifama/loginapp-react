import React from 'react'
import style from './About.module.scss'
import about from '../../assets/images/app.png'
const About = () => {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                flex: 5
            }}
        />
    );
  return (
    <section className={style.about}>
        <h1>TENTANG KAMI</h1>
        
        <div className={style.content}>

            <div className={style.aboutimg}>
                <img src={about} alt="about img" />
            </div>

            <div className={style.abouttext}>
                 <div className={style.line}></div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Doloremque debitis libero quae placeat consectetur voluptas 
                    accusantium rerum consequatur magnam nemo!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem 
                    debitis eius odit vitae recusandae ea nihil aperiam suscipit laboriosam ab 
                    nesciunt ullam facere possimus, blanditiis quod assumenda vel. Dignissimos enim 
                    voluptate provident rerum tempore ipsa quod? 
                    Expedita quos odio eius velit? Culpa temporibus quam pariatur a nemo expedita non ad.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, nesciunt,
                    ipsam culpa ad at fuga cumque, eaque cum ratione adipisci itaque maxime enim?
                    Sed quas sapiente eaque iure aliquid autem?</p>

            </div>

            
            <span>
                
            <div className={style.line}></div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae laudantium numquam eligendi dicta magni totam error fugit consectetur minus quasi adipisci atque sequi eaque, incidunt ad alias beatae placeat illum assumenda natus iure amet? Harum?
                </p>
            </span>
        </div>
    </section>
  )
}

export default About