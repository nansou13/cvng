import React from 'react'
import styled from "styled-components"
import Cover from 'react-video-cover';

import Video4 from '../statics/video4.mp4'

const CoverBlock = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
`

const videoOptions = {
    src: Video4,
    autoPlay: true,
    muted: true,
    loop: true,
  };
  



const VideoCover = () => (
    <CoverBlock>
      <Cover
            videoOptions={videoOptions}
            remeasureOnWindowResize
            
          />
    </CoverBlock>
  )
  
  export default VideoCover