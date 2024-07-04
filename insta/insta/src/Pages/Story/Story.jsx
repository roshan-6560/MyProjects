import React from 'react'
import StoryViwer from '../../Component/StoryComponents/StoryViwer'

const Story = () => {
    const story=[
        {
            image:"https://cdn.pixabay.com/photo/2020/06/24/17/41/incantation-5337079_1280.jpg"
        },{
            image:"https://cdn.pixabay.com/photo/2023/04/06/15/08/rabbit-7904131_1280.jpg"
        },
        {
            image:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg"
        },
        {
            image:"https://cdn.pixabay.com/photo/2017/01/04/21/00/fireworks-1953253_1280.jpg"
        },{
          image:"https://cdn.pixabay.com/photo/2023/04/06/15/08/rabbit-7904131_1280.jpg"
      }
    ]
  return (
    <div>
      <StoryViwer stories={story}/>
    </div>
  )
}

export default Story
