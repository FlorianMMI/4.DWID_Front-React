import Card from '../Card/card';
import React from 'react';


interface MemberProps {
    pic : string;
    name : string;
    email : string;

    description : string;
    social : any;
}

interface TeamProps {
    title : string;
    description : string;
    members : MemberProps[];
}


export default function Team(team: TeamProps) {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold">{team.title}</h2>
            <p className="text-center">{team.description}</p>
            <ul className="flex flex-wrap justify-center">
                {team.members.map((member, index) => {
                    return (
                        <li >
                            <Card 
                                {...member}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    )};
