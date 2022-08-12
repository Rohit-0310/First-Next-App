import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
      <div className={styles.container}>
      <Navbar />

        <h1 style={{textAlign:'center'}}>Next Home Page</h1>
      </div>
    )
}
