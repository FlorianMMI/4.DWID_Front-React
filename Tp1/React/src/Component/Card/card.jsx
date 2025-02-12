import React from 'react';
import Social from '../Social/social';

function Card ({user}) {
    

    return (
        <>
        {user.map((u, index) => (
            <div key={index} className="flex flex-col bg-white m-4 p-4">
                <img className="rounded-xl" src={u.pic} alt="" />
                
                <div className="text-left">
                    <h4 className="text-black">{u.name}</h4>
                    <span className="text-green-500">{u.email}</span>
                    <p className="text-black w-8/10">{u.description}</p>
                </div>

                <Social 
                    socialNetworks={u.social}
                />
            </div>
        ))}
        </>
    );
};

export default Card;