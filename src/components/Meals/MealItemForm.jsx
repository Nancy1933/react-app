import React, { useState } from "react";
import Button from "../UI/Button"
import styles from "./MealItemForm.module.css"
import Input from "../UI/Input";
const MealItemForm = (props) => {
    return <form className={styles.mealitemform}>
        <div className={styles.upper}>
            <label htmlFor={props.id}>Количество</label>
            <Input input={{
                id: props.id,
                type: "number",
                min: '1',
                step: '1',
                defaultValue: "1",
            }} />
        </div>
        <Button >Добавить</Button>
    </form>
}
export default MealItemForm