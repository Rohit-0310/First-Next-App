import Navbar from "../../components/Navbar"
import styles from '../../styles/Car.module.css';


const index = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.main} >
        <h1>Enter City Name in URL</h1>
      </div>
    </div>
  )
}

export default index