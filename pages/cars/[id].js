import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar';
import styles from '../../styles/Car.module.css';


function Car() {
    const router = useRouter()
    const {id} = router.query
    return (
        <>
        <Navbar />
        <div className={styles.main}>

            <h2>Car Name:- {id}</h2>
        </div>
        </>
        )
}

export default Car