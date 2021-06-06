import {createContext, useState, ReactNode, useEffect} from "react";
import challenges from '../../challenges.json'

interface Challenge {
    type:'body' | 'eye'
    description:string,
    amount : number;
}

interface ChallengensContextData{
    level:number;
    currentExperience:number;
    challengesCompleted:number;
    activeChalleng:Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge:() => void,
    experienceToNextLevel:number,

}

export const ChallengensContext = createContext({} as ChallengensContextData)


interface  ChallengensProviderProps {
    children:ReactNode;
}

export function ChallengesProvider({children}:ChallengensProviderProps){
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChalleng,setActiveChalleng] = useState(null)

    const experienceToNextLevel = Math.pow((level+1) * 4 ,2)

    useEffect(() => {
        Notification.requestPermission();
    },[])


    function levelUp(){
        setLevel(level+1)
    }

    function startNewChallenge(){
        const randomChallegedIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallegedIndex]
        setActiveChalleng(challenge)

        if(Notification.permission === 'granted' ) {
            new Notification('Novo desafio',{
                body: `Valendo ${challenge.amount} xp!`
            })
        }
    }

    function resetChallenge(){
        setActiveChalleng(null)
    }

    function completeChallenge(){
        if(!activeChalleng){
            return;
        }

        const { amount } = activeChalleng;
        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel ){
            finalExperience = finalExperience - experienceToNextLevel
            levelUp();
        }

        setCurrentExperience(finalExperience)
        setActiveChalleng(null)
        setChallengesCompleted(challengesCompleted + 1)

    }

    return(
        <ChallengensContext.Provider
            value={{
                level,
                levelUp,
                currentExperience,
                experienceToNextLevel,
                challengesCompleted,
                startNewChallenge,
                activeChalleng,
                resetChallenge,
                completeChallenge,

            }}>
            {children}
        </ChallengensContext.Provider>
    );
}
