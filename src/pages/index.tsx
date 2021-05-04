import {CompletedChallends} from "../components/CompletedChallends";
import {ExperienceBar} from "../components/ExperienceBar";
import {Profile} from "../components/Profile";

import styles from '../styles/pages/Home.module.css'
import {Countdown} from "../components/Countdown";

import Head from "next/head";
import {ChallengBox} from "../components/ChallengBox";


export default function Home() {
    return (
        <div className={styles.container}>

            <Head>
                <title>Inicio Move Yourself</title>
            </Head>

            <ExperienceBar />

            <section>
                <div>
                    <Profile />
                    <CompletedChallends />
                    <Countdown />
                </div>
                <div>
                <ChallengBox />
                </div>
            </section>
        </div>
    )
}
