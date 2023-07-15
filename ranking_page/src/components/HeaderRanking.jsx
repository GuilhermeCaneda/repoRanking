import styles from './HeaderRanking.module.css'

export default function HeaderRanking() {

    return(
        <div className={styles.header_ranking}>
            <div className={styles.headerp1}>
                <p>#</p>
                <p>Artist</p>
            </div>
            <div className={styles.headerp2}>
                <p>Change</p>
                <p>NFTs Sold</p>
                <p>Volume</p>
            </div>
        </div>
    );
}