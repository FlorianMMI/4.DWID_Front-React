import React from 'react';


function Social  ({socialNetworks}) {
    

    return (
        <div className="social">
            <ul className="flex gap-4">
                {socialNetworks.map((network, index) => (
                    <li className = "flex justify-center items-center" key={index}>
                        <img src={`./src/assets/${network.name}.svg`} alt={network.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Social;