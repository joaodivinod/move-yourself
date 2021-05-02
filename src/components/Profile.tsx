import styles from '../styles/components/Profile.module.css'
export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/joaodivinod.png" alt="João Divino - Foto de Perfil"/>
            <div>
                <strong>João Divino</strong>
                <p>
                    <img src="icons/level.svg" alt="Icone de level UP"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}