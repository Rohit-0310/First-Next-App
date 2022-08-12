import styles from "../../styles/news.module.css"
import Navbar from '../../components/Navbar';


export const getServerSideProps = async () => {
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
            {/* <title>Sports News in Hindi</title> */}
            <Navbar />
            <div className={styles.newsTop}>
                {/* <h1 style={{ textAlign: 'center' }}>Sports News</h1> */}
                <div>{
                    data.map((e) => {
                        return (
                            <div key={e.id} className={styles.flexImg}>
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