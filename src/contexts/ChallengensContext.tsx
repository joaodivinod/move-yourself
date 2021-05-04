import {createContext, useState, ReactNode} from "react";


interface ChallengensContextData{
    level:number;
    currentExperience:number;
    challengesCompleted:number;
    levelUp: () => void;
    startNewChallenge: () => void;
}

export const ChallengensContext = createContext({} as ChallengensContextData)


interface  ChallengensProviderProps {
    children:ReactNode;
}

export function ChallengesProvider({children}:ChallengensProviderProps){
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);


    function levelUp(){
        setLevel(level+1)
    }

    function startNewChallenge(){
        console.log('New challenge')
    }

    return(
        <ChallengensContext.Provider
            value={{
                level,
                levelUp,
                currentExperience,
                challengesCompleted,
                startNewChallenge

            }}>
            {children}
        </ChallengensContext.Provider>
    );
}