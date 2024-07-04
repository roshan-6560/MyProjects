import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Progressbar from './Progressbar'
import './Progress.css'

const StoryViewerContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
background-color:black;
`

const StoryImage=styled.img`
max-height:90vh;
object-fit:contain;

`

const StoryViwer = ({stories}) => {
    const [curentStoryIndex,setCurentStoryIndex]=useState(0);
    const [activeIndex,setActiveIndex]=useState(0);

    const handleNextStory=()=>{
        if(curentStoryIndex<stories.length-1){
            setCurentStoryIndex(curentStoryIndex+1)
            setActiveIndex(activeIndex+1);
        }
        else if(curentStoryIndex===stories.length-1){
            setCurentStoryIndex(0);
            setActiveIndex(0);
        }
    }
    useEffect(()=>{
        const interval=setInterval(()=>{handleNextStory()},2000)
        return ()=> clearInterval(interval);
    },[curentStoryIndex])

    
  return (
    <div className='relative w-full'>
     <StoryViewerContainer>
        <StoryImage className='image' src={stories?.[curentStoryIndex].image} />
        <div className='absolute top-0 flex w-full'>
           {stories.map((item, index)=><Progressbar key={index} duration={200} index={index} activeIndex={activeIndex}/>)} 
        </div>
     </StoryViewerContainer>
    </div>
  )
}

export default StoryViwer
