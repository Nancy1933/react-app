import React from "react"
import styles from "./Header.module.css"
import SushiImage from '../../assets/sushi.jpg'
import HeaderCartButton from "./HeaderCartButton"
const Header = (props) => {
    return <React.Fragment>
        <header className={styles.header}>
            <h1>Япона Кухня</h1>
            <HeaderCartButton onClick={props.onClick} />
        </header>
        <div className={styles[`subheader-img`]}>
            <img src={SushiImage} alt="Блюдо" />
        </div>
    </React.Fragment>
}
export default Header