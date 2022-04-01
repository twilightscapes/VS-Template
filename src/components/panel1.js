
import React from "react"
// import React, { useRef } from "react";
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

// import { Link } from "gatsby"
// import { graphql } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'
// import TwilightLogo from "../../static/assets/logo.svg"
// import { StaticImage } from "gatsby-plugin-image"
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
// import ReactPlayer from 'react-player/lazy'
// import { ImPlay } from "react-icons/im"
// import LightCycle from "../../static/assets/light-cycle.svg"
// import QuoraStrike from "../../static/assets/quora-strike.svg"
// import LoveSignal from "../../static/assets/love-signal.svg"
// import Castor from "../../static/assets/castor.svg"
// import SamFly from "../../static/assets/sam-fly.svg"
// import SamFlynn from "../../static/assets/sam-flynn.png"
// import CluGuy from "../../static/assets/clu.png"
// import TronGuy from "../../static/assets/tron.png"
// import MCP from "../../static/assets/mcp.svg"
// import McpEffects from "../../static/assets/mcp-effects.svg"
// import QuoraStand from "../../static/assets/quora-ass.png"
// import KevinFlynn from "../../static/assets/kevin-flynn.png"
// import TronChick from "../../static/assets/tron-chick1.svg"
import RackLogo from "../../static/assets/hytron-grid.svg"

const CustomBox = styled.div`



.frontvideo iframe{
  z-index:-2 !important;
}


`




function Characters() {


  // const playerRef = useRef(null);
  // const playerContainerRef = useRef(null);

  return (

  
<CustomBox style={{}}>

{/* GRID INTRO */}
{/* <div className="" id="" style={{display:'',  padding:'0', outline:'0px solid yellow', height:'', width:'100%', position:'relative', overflow:'hidden'}}>





<div id="" className="wrap-element tronpanel" style={{overflow:'', height:'', position:'relative', zIndex:'0' }} ref={playerContainerRef}>
<ReactPlayer
        ref={playerRef}
         className='frontvideo'
         url="https://youtu.be/JOMipAq7ZSk"
         width="100%"
         height="100vh"
         playing={true}
            controls={false}
            light={true}
            loop={true}
            muted={true}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, controls:0, start:0, end:88, mute:1, loop:1, rel:0, origin:"http://rackspace.netlify.app" }
              },
            }}

          playsinline
            playIcon={

          <>   

  




<div style={{height:'100vh', width:'100vw', background:'#111', position:'fixed', top:'0', zIndex:'-1', backgroundSize:'cover'}}>
<StaticImage className=""
alt="Todd Lambert Web development for photographers" src="../../static/assets/home-slider2.jpg"   />
</div>

<div className="specialfont" style={{position:'relative', zIndex:'3', right:'', top:'' , padding:'20% 0 0 0', textShadow:'2px 2px 2px #333',}}>
            <div style={{fontWeight:'bold', padding:'2rem', fontSize:'2rem', backdropFilter:'blur(4px)', background:'rgba(0, 0, 0, .5)', borderRadius:'12px', }}>Click To Play
    <ImPlay className="" style={{margin:'0 auto', width:'', fontSize:'50px', filter:'dropShadow(0px 0px 14px #E3272D)'}} />
            </div>
</div>
   

            
       
             
           </>  
          }
         
          />




</div>

</div> */}


<div style={{height:'100vh', width:'100vw', background:'#111', position:'fixed', top:'0', zIndex:'-1', backgroundSize:'cover'}}>
{/* <StaticImage className=""
alt="Todd Lambert Web development for photographers" src="../../static/assets/generic.png"   /> */}
</div>
<RackLogo className="racklogo"  />
<div style={{position:'absolute', top:'50px', width:'100vw', height:'', zIndex:'3'}}>



<h1
    className="lineOne"
    style={{
     color: 'white',
      textAlign: 'center', 
      letterSpacing: '.0rem',
      fontSize:'clamp(2rem, 3.5vw, 3.8rem)',
      filter:'dropShadow(1px 2px 4px rgba(0,0,0,.9))',
      textShadow:'2px 2px 0 #333'
    }}
  >
    Quality Manufacturing
  </h1>

<h2
          className="boom3 normal txtshadow-header lineTwo"
          style={{
            color: '#fff',
            textAlign: 'center', 
            fontSize:'clamp(2rem, 3.5vw, 3.8rem)',
            filter:'dropShadow(1px 2px 4px rgba(0,0,0,.9))',
            textShadow:'2px 2px 0 #333'
          }}
        >
         Precision Parts
        </h2>

<h3
          className="boom4 txtshadow-header mobile-txt lineThree"
          style={{
           color: 'white',
            textAlign: 'center',
            textTransform: 'normal', 
            fontSize:'clamp(2rem, 3.5vw, 3.8rem)',
            filter:'dropShadow(1px 2px 4px rgba(0,0,0,.9))',
            textShadow:'2px 2px 0 #333'
          }}
        >
         Done right AND on time
        </h3>

</div>






</CustomBox>
  )
}
export default Characters