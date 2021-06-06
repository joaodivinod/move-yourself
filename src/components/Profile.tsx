import styles from '../styles/components/Profile.module.css'
import {useContext} from "react";
import {ChallengensContext} from "../contexts/ChallengensContext";
export function Profile(){
    const { level } = useContext(ChallengensContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/joaodivinod.png" alt="João Divino - Foto de Perfil"/>
            <div>
                <strong>João Divino</strong>
                <p>
                    <img src="icons/level.svg" alt="Icone de level UP"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}
