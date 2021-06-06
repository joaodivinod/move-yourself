import styles from '../styles/components/ChallengBox.module.css'
import {useContext} from "react";
import {ChallengensContext} from "../contexts/ChallengensContext";
export function ChallengBox(){
    const { activeChalleng , resetChallenge, completeChallenge } = useContext(ChallengensContext)

    return(
        <div className={styles.challengBoxContainer}>
            {activeChalleng ? (
                <div className={styles.challengBoxActive}>
                    <header>Ganhe {activeChalleng.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChalleng.type}.svg`} alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChalleng.description}</p>
                    </main>
                    <footer>
                        <button type="button" onClick={resetChallenge} className={styles.challengeFailedButton}>Falhei</button>
                        <button type="button" onClick={completeChallenge} className={styles.challengeSucceededButton}>Completei</button>
                    </footer>
                </div>
            ):
                <div className={styles.challengBoxNotActive}>
                    <strong>Finalize um ciclo para recber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios
                    </p>

                </div>
            }


        </div>
    )
}
