import Card from '../UI/Card'
import styles from './PromoText.module.css'
const PromoText = (props) => {
    return <Card className={styles[`promo-text`]}>
        <h2>Онлайн Суши Ресторан Япона Кухня</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem ut consequuntur repellendus laboriosam iusto ipsum architecto magni eveniet non blanditiis nihil, cum voluptatum obcaecati, commodi inventore rerum! Quasi, neque quaerat?</p>
    </Card>
}
export default PromoText