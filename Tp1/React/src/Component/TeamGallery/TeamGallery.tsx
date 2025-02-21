import { useState } from 'react';
import Card from '../Card/card';

interface MemberProps {
    pic: string;
    name: string;
    email: string;
    description: string;
    social: any;
}

interface TeamProps {
    title: string;
    description: string;
    members: MemberProps[];
}


export default function TeamGallery(Team: TeamProps) {
    const [index, setIndex] = useState(0);
    const hasnext = index < Team.members.length - 1;
    const hasback = index > 0;

    function handleNextClick() {
        if (hasnext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }

    }

    function handleBackClick(){
        if (hasback) {
            setIndex(index - 1);
        }
        else {
            setIndex(Team.members.length - 1);
        }
    }

    let member = Team.members[index];
    return (
        <>
        <div className = "flex flex-row justify-center items-center">
                
                <button onClick={handleBackClick}>
                    Back
                </button>

                <div>
                    <Card
                        {...member}
                    />
                </div>
                
                <button onClick={handleNextClick}>
                    Next
                </button>
        </div>
            
        </>
    )

}