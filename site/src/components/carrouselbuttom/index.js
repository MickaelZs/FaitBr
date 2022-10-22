import Styles from "./Button.modules.scss"

function Button({text}){
    return <button className={Styles.btn}>{text}</button>
}

export default Button;