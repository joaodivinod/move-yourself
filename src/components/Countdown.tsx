import styles from '../styles/components/Countdown.module.css'
import {useState, useEffect, useContext} from "react";
import {ChallengensContext} from "../contexts/ChallengensContext";
import {CountDownContext} from "../contexts/CountDownContext";


export function Countdown(){

    const { minutes, seconds, hasFinished, isActive, startCountDown, resetCountDonw } = useContext(CountDownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2,'0').split('')



    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span> : </span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {hasFinished ?(
                <div>
                    <button type="button" className={styles.countdownButton} disabled>Ciclo encerrado</button>
                </div>
            ):(
                <>
                    {isActive ? (
                        <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountDonw} >Abandonar Ciclo</button>
                    ):(
                        <button type="button" className={styles.countdownButton} onClick={startCountDown} >Iniciar Cliclo</button>
                    ) }
                </>
            )

            }





        </div>
    )
}
