import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar';
import styles from '../../styles/Car.module.scss';


const City = () => {
    const router = useRouter();
    const {id} = router.query

  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <h1>Welcome to {id}</h1>

      </div>
    </div>
  )
}

export default City