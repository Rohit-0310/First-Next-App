import styles from "../../styles/news.module.scss"
import Navbar from '../../components/Navbar';
import Head from 'next/head'


export const getStaticProps = async () => {
    const res = await fetch("https://daily-news-network-nestjs.herokuapp.com/api/v1/inshorts/en/sportNews");
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
}

const index = ({ data }) => {




    return (
        <div>
            <Head>
                <title>Sports News | English</title>
            </Head>
            <Navbar />
            <div className={styles.newsTop}>
                {/* <h1 style={{ textAlign: 'center' }}>Sports News</h1> */}
                <div>{
                    data.map((e, i) => {
                        return (
                            <div key={i} className={styles.flexImg}>
                                <div>
                                    <picture className={styles.newsImg}>
                                        <img
                                            width='250px'
                                            height='250px'
                                            src={e.urlToImage} alt={e.description} />
                                    </picture>

                                </div>
                                <div className={styles.flexNews}>
                                    <div>
                                        <p className={styles.title}>{e.description}</p>
                                        <p className={styles.content}>{e.content}</p>
                                    </div>
                                    <div>
                                        <p>read more at <a href={e.url}>{e.source.name}</a></p>
                                    </div>
                                </div>
                            </div>)
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default index