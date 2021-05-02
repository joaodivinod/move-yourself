import styles from '../styles/components/CompletedChallends.module.css'
import {inspect} from "util";
export function CompletedChallends(){
    return(
        <div className={styles.CompletedChallengesContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}