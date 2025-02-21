import React from 'react';
import SocialIcon from '../../ui/SocialIcon/Socialicon';

interface SocialProps {
    socialNetworks: {name: string, url: string}[];
    className?: string;
}


function Social  ({socialNetworks}: SocialProps) {
    
    if (socialNetworks == undefined || socialNetworks.length == 0) {
        return null;
    }

    socialNetworks.sort((a, b) => a.name.localeCompare(b.name));

    let liste = socialNetworks.map((s, index) => (
        <li key={index}>
            <a href={s.url}><SocialIcon name={s.name}/></a>
        </li> 
    ));

    
        return <ul className="flex gap-4">{liste}</ul>;
    


};

export default Social;