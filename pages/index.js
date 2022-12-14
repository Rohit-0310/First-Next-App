import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
            <title>First Next App</title>
            <link rel="icon" href="Image/favicon.ico" />
        </Head>
      <Navbar />

        <h1 style={{textAlign:'center'}}>Next Home Page</h1>
      </div>
    )
}
