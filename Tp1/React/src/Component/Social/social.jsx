import React from 'react';
import SocialIcon from '../SocialIcon/Socialicon';


function Social  ({socialNetworks}) {
    

    return (
        <div className="social">
            <ul className="flex gap-4">
                {socialNetworks.map((network, index) => (
                    <li className = "flex justify-center items-center" key={index}>
                        <a href = {network.url} alt={network.name}><SocialIcon name = {network.name}/></a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Social;