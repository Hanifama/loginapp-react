import  ReactDOM  from 'react-dom'     
import style from "./Loader.module.scss"
import loaderImg from "../../assets/images/loader.gif"

const Loader = () => {
  return ReactDOM.createPortal(
    <div className={style.wrapper}>
        <div className={style.loader}>
            <img src={loaderImg} alt="Loading..." />
        </div>
    </div>,

    document.getElementById("loader")
  )
}

export default Loader