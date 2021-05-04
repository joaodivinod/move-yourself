import styles from '../styles/components/ChallengBox.module.css'
export function ChallengBox(){

    const hasActiveChalle = true

    return(
        <div className={styles.challengBoxContainer}>

            {hasActiveChalle ? (
                <div className={styles.challengBoxActive}>
                    <header>Ganhe 400 xp</header>
                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.challengeFailedButton}>Falhei</button>
                        <button type="button" className={styles.challengeSucceededButton}>Completei</button>
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