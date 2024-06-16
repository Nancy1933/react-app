import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/cart-context";
const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext)
  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount
  }, 0)
  return (
    <button
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
    >
      <span className={styles.icon}><CartIcon /></span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
};
export default HeaderCartButton;
