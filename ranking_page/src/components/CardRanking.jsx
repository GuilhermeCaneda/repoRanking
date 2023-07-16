import styles from './CardRanking.module.css'

export default function CardRanking(props) {
    return(
        <div className={styles.ranking_card}>

            <div className={styles.ranking_cardp1}>
                <p className={styles.ranking_number}>{props.number}</p>
                <div>
                    <img src={props.avatar} className={styles.ranking_avatar} alt='avatar'></img>
                    <h5 className={styles.ranking_artist}>{props.artist}</h5>
                </div>
            </div>

            <div className={styles.ranking_cardp2}>
                <p className={styles.stats_change}>+{props.change}%</p>
                <p id={styles.stats_nfts}>{props.nfts}</p>
                <p id={styles.stats_volume}>{props.volume} ETH</p>
            </div>

        </div>
    );
}