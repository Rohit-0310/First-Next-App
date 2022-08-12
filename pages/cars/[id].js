import { useRouter } from 'next/router'
import styles from '../../styles/Car.module.css';


function Car() {
    const router = useRouter()
    const {id} = router.query
    return (
        <>
        <div className={styles.main}>

            <h2>Car Name:- {id}</h2>
        </div>
        </>
        )
}

export default Car