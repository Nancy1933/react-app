import React, { useState } from 'react'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'
const MealItem = (props) => {
    return <section className={styles.meal}>
        <div className={styles.info}>
            <h3>{props.name}</h3>
            <p className={styles.description}>{props.description}</p>
            <span className={styles.price}>{`$${props.price}`}</span>
        </div>
        <MealItemForm id={props.id} meal={props.name} />
    </section>
}
export default MealItem