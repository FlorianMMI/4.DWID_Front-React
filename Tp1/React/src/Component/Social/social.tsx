import React from 'react';
import SocialIcon from '../SocialIcon/Socialicon';

interface SocialProps {
    socialNetworks: {name: string, url: string}[];
}


function Social  ({socialNetworks}: SocialProps) {
    

    return (
        <div className="social">
            <ul className="flex gap-4">
                {socialNetworks.map((network, index) => (
                    <li className = "flex justify-center items-center" key={index}>
                        <a href = {network.url} ><SocialIcon name = {network.name}/></a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Social;