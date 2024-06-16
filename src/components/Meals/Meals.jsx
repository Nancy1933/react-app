import React from "react"
import MealList from "./MealList"
import PromoText from "./PromoText"
import Card from "../UI/Card"
import styles from "./Meals.module.css"
const Meals = (props) => {
    return <React.Fragment>
        <PromoText />
        <Card className={styles.mealList}><MealList /></Card>
    </React.Fragment>
}
export default Meals