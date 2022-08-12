import styles from './style.module.scss'
import profile from "../public/Image/profile.JPG"
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return (
        <div className={styles.topNav}
        // style={{ display: 'flex', justifyContent: 'space-around', margin: '40px 25px', border: '1px dotted red', borderRadius: '15px 50px', padding: '20px 0' }}
        >
            <Link href="/">
                <div><b>Home Page</b></div>
            </Link>
            <Link href="/dashboardNews">
                <div><b>News Dashboard</b></div>
            </Link>
            <Link href="/sportsNews">
                <div><b>Sports News</b></div>
            </Link>

            <Link href='englishSports'>
                <div><b>English Sports News</b></div>
            </Link>
            <Link href="/about">
                <div><b>About Page</b></div>
            </Link>
            <Link href='/cars'>
                <div><b>Cars Page</b></div>
            </Link>
            <Link href='/city'>
                <div><b>City Page</b></div>
            </Link>
            <Link href="/UserForm">
                <div><b>User Form</b></div>
            </Link>
            <div className={styles.navImg}>
                <Image src={profile} alt='profile' />
            </div>
        </div>
    )
}

export default Navbar