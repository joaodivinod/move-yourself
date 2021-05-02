import {ExperienceBar} from "../components/ExperienceBar";
import Head from "next/head";
import {Profile} from "../components/Profile";

import styles from '../styles/pages/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Move Yourself</title>
            </Head>
            <ExperienceBar/>

            <section>
                <div>
                    <Profile/>
                </div>
                <div>

                </div>
            </section>

        </div>
    )
}
