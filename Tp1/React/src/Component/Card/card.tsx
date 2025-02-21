import React from 'react';
import Social from '../Social/social';
import Avatar from '../../ui/Avatar/Avatar';
import Email from '../../ui/Email/Email';
import Citation from '../../ui/Citation/Citation';

interface User {
    pic: string;
    name: string;
    email?: string;
    
    description: string;
    social: any;
}

function Card(user : User) {
    return (

        <div  className="flex flex-col bg-white m-4 p-4 rounded-3xl ">
           <Avatar 
                url={user.pic}
                alt={user.name}
                
            />
            
            <div className=" text-left flex flex-col gap-2">
                <h4 className="text-black font-medium text-2xl">{user.name}</h4>
                <Email>
                    {user.email}</Email>
                <Citation>{user.description}</Citation>

            </div>

            <Social 
                socialNetworks={user.social}
            />
        </div>
    );
    
    
}
export default Card;