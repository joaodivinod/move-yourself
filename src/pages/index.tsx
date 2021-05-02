import {ExperienceBar} from "../components/ExperienceBar";
import Head from "next/head";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Move Yourself</title>
            </Head>
            <ExperienceBar/>
        </div>
    )
}
