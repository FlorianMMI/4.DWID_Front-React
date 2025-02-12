import { useState } from 'react'

import './App.css'
import Card from './Component/Card/card.jsx'

const socialNetworks = [
  
];

const user = [
  {
      pic : "https://picsum.photos/id/1/350/300",
      name: "Gary Do",
      email: "gary.do@but1.mmi",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [{ name: 'Facebook', url: 'https://www.facebook.com' },
              { name: 'Github', url: 'https://www.github.com' },
              { name: 'Instagram', url: 'https://www.instagram.com' }]
    }
];


function App() {
  

  return (
       
    <Card 
    value={socialNetworks}
    user = {user}
    />
        
  
  )
}

export default App
