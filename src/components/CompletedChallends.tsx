import styles from '../styles/components/CompletedChallends.module.css'
import {inspect} from "util";
import {useContext} from "react";
import {ChallengensContext} from "../contexts/ChallengensContext";
export function CompletedChallends(){

    const { challengesCompleted } = useContext(ChallengensContext)

    return(
        <div className={styles.CompletedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}
