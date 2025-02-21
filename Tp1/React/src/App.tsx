import { useState } from 'react'

import './App.css'
import Card from './Component/Card/card'
import Team from './Component/Team/Team'


const user = [
  {
      pic : "https://picsum.photos/id/1/150/150",
      name: "Gary Do",
      email: "garydo@but1.mmi",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [{ name: 'Facebook', url: 'https://www.facebook.com' },
                { name: 'Github', url: 'https://www.github.com' },
                { name: 'Instagram', url: 'https://www.instagram.com' }]
    },
  {
      pic : "https://picsum.photos/id/2/150/150",
      name: "Gary Do",
      email: "garydo@but1.mmi",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [{ name: 'Facebook', url: 'https://www.facebook.com' },
                { name: 'Github', url: 'https://www.github.com' },
                { name: 'Instagram', url: 'https://www.instagram.com' }]
    },
  {
      pic : "https://picsum.photos/id/3/150/150",
      name: "Gary Do",
      email: "garydo@but1.mmi",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [{ name: 'Facebook', url: 'https://www.facebook.com' },
                { name: 'Github', url: 'https://www.github.com' },
                { name: 'Instagram', url: 'https://www.instagram.com' }]
    },
  {
      pic : "https://picsum.photos/id/4/150/150",
      name: "Gary Do",
      email: "garydo@but1.mmi",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [{ name: 'Facebook', url: 'https://www.facebook.com' },
                { name: 'Github', url: 'https://www.github.com' },
                { name: 'Instagram', url: 'https://www.instagram.com' }]
    },
  {
      pic : "https://picsum.photos/id/5/150/150",
      name: "Gary Do",
      email: "garydo@but1.mmi",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [{ name: 'Facebook', url: 'https://www.facebook.com' },
                { name: 'Github', url: 'https://www.github.com' },
                { name: 'Instagram', url: 'https://www.instagram.com' }]
    },
  {
      pic : "https://picsum.photos/id/6/150/150",
      name: "Gary Do",
      email: "garydo@but1.mmi",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [{ name: 'Facebook', url: 'https://www.facebook.com' },
                { name: 'Github', url: 'https://www.github.com' },
                { name: 'Instagram', url: 'https://www.instagram.com' }]
    },
  {
      pic : "https://picsum.photos/id/7/150/150",
      name: "Gary Do",
      email: "garydo@but1.mmi",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [{ name: 'Facebook', url: 'https://www.facebook.com' },
                { name: 'Github', url: 'https://www.github.com' },
                { name: 'Instagram', url: 'https://www.instagram.com' }]
    },
  {
      pic : "https://picsum.photos/id/8/150/150",
      name: "Gary Do",
      email: "garydo@but1.mmi",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [{ name: 'Facebook', url: 'https://www.facebook.com' },
                { name: 'Github', url: 'https://www.github.com' },
                { name: 'Instagram', url: 'https://www.instagram.com' }]
    }
];

const user2 = [
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
       
    <Team
      title="Team Title"
      description="Team Description"
      members={user}
    />
    
  
  )
}

export default App
