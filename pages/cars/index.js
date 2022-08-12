import Navbar from '../../components/Navbar';
import styles from '../../styles/Car.module.css';


function CarsList() {
    return( 
    <div>
        <Navbar />
        <div className={styles.main} >
            <h1 className={styles.carHeading}>Cars List Page</h1>
        </div>
    </div>
    )
}

export default CarsList