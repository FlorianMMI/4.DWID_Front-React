import React from 'react';
import Social from '../Social/social';

function Card ({user}) {
    const cards = user.map((u, index) => (
        <div key={index} className="flex flex-col bg-white m-4 p-4 rounded-3xl ">
            <img className="rounded-xl" src={u.pic} alt="" />
            
            <div className=" text-left">
                <h4 className="text-black font-medium text-2xl">{u.name}</h4>
                <span className="text-green-500 font-medium text-xl">{u.email}</span>
                <p className="text-black w-8/10">{u.description}</p>
            </div>

            <Social 
                socialNetworks={u.social}
            />
        </div>
    ));
    
    return (
        <div className="flex flex-wrap justify-center">
            {cards}
        </div>
    );
}
export default Card;