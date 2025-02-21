import { useState } from 'react'

import './App.css'
import Card from './Component/Card/card'
import Team from './Component/TeamGallery/TeamGallery'


const user = [
  {
      id: 1,
      pic : "https://picsum.photos/id/1/150/150",
      name: "User 1",
      email: "user1@example.com",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [
          { name: 'Facebook', url: 'https://www.facebook.com' },
          { name: 'Github', url: 'https://www.github.com' },
          { name: 'Instagram', url: 'https://www.instagram.com' }
      ]
  },
  {
      id: 2,
      pic : "https://picsum.photos/id/2/150/150",
      name: "User 2",
      email: "user2@example.com",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [
          { name: 'Facebook', url: 'https://www.facebook.com' },
          { name: 'Github', url: 'https://www.github.com' },
          { name: 'Instagram', url: 'https://www.instagram.com' }
      ]
  },
  {
      id: 3,
      pic : "https://picsum.photos/id/3/150/150",
      name: "User 3",
      email: "user3@example.com",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [
          { name: 'Facebook', url: 'https://www.facebook.com' },
          { name: 'Github', url: 'https://www.github.com' },
          { name: 'Instagram', url: 'https://www.instagram.com' }
      ]
  },
  {
      id: 4,
      pic : "https://picsum.photos/id/4/150/150",
      name: "User 4",
      email: "user4@example.com",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [
          { name: 'Facebook', url: 'https://www.facebook.com' },
          { name: 'Github', url: 'https://www.github.com' },
          { name: 'Instagram', url: 'https://www.instagram.com' }
      ]
  },
  {
      id: 5,
      pic : "https://picsum.photos/id/5/150/150",
      name: "User 5",
      email: "user5@example.com",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [
          { name: 'Facebook', url: 'https://www.facebook.com' },
          { name: 'Github', url: 'https://www.github.com' },
          { name: 'Instagram', url: 'https://www.instagram.com' }
      ]
  },
  {
      id: 6,
      pic : "https://picsum.photos/id/6/150/150",
      name: "User 6",
      email: "user6@example.com",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [
          { name: 'Facebook', url: 'https://www.facebook.com' },
          { name: 'Github', url: 'https://www.github.com' },
          { name: 'Instagram', url: 'https://www.instagram.com' }
      ]
  },
  {
      id: 7,
      pic : "https://picsum.photos/id/7/150/150",
      name: "User 7",
      email: "user7@example.com",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [
          { name: 'Facebook', url: 'https://www.facebook.com' },
          { name: 'Github', url: 'https://www.github.com' },
          { name: 'Instagram', url: 'https://www.instagram.com' }
      ]
  },
  {
      id: 8,
      pic : "https://picsum.photos/id/8/150/150",
      name: "User 8",
      email: "user8@example.com",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      social : [
          { name: 'Facebook', url: 'https://www.facebook.com' },
          { name: 'Github', url: 'https://www.github.com' },
          { name: 'Instagram', url: 'https://www.instagram.com' }
      ]
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
