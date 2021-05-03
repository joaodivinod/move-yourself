import styles from '../styles/components/Countdown.module.css'
import {useState,useEffect} from "react";

let countDownTimeout:NodeJS.Timeout

export function Countdown(){

    const[time, setTime] = useState(25*60)
    const[isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] =  useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2,'0').split('')

    function startCountDown(){
        setIsActive(true)
    }

    function resetCountDonw(){
        clearTimeout(countDownTimeout);
        setIsActive(false);
        setTime(25*60);
    }

    useEffect(()=>{
        if(isActive && time > 0){
            countDownTimeout = setTimeout(()=>{
                setTime(time-1)
            },1000)
        }else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
        }

    },[isActive, time])

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