/** @jsx jsx */
// import React from "react"

import React, { useState, useRef } from "react";

import Controls from "../components/Controls";

import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5"
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
// import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import CommentBox from "../components/commentbox"
// import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import Countdown from 'react-countdown'
// import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5"
import { AiOutlineAudioMuted } from "react-icons/ai"
import { Footer } from "../components/footer"
// import { SRLWrapper } from "simple-react-lightbox"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import ReactPlayer from 'react-player/lazy'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import YouTubed from "../pages/youtube"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import ShareSocial from '../components/share' 
import GoBack from "../components/goBack"
import { ImPlay } from "react-icons/im"
// import TimeAgo from 'react-timeago'
import styled from "styled-components"
const CustomBox = styled.div`

// .controlsWrapper: {
//   visibility: hidden;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   height: 100%;
//   background: rgba(0,0,0,0.6);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   display:none;
// }



// .pagination{ position:relative; top:-205px;}


@media (max-width: 48em) {

  .pagination{maxWidth:'100vw'}
}




  // .sidebarIconToggle{bottom:40% !important;}



  // #vert {
  //   overflow-x: scroll;
  //   scroll-snap-type: x mandatory;
  //   height:100vh;
  // }
  // #vert section {
  //   height:100vh;
  //   scroll-snap-align: center;
  //   overflow:hidden;
  //   background:tranparent !important;
  // }


}


`



const Pagination = props => (
  <div className="pagination -post1" style={{position:'fixed', bottom:'20px',}}>
    <ul className="" style={{}}>
      {props.previous && props.previous.frontmatter.template === "blog-post" && (
        // <li style={{border:'1px solid', borderRadius:'12px', filter:'drop-shadow(0 0px 6px rgba(0, 0, 0, 1))'}}>
        <li style={{}}>
          <Link style={{}}  to= {props.previous.frontmatter.slug + "/"} rel="prev">
          <button className="" style={{display:'flex', justifyContent:'flex-end', textShadow:'2px 2px 0 #222', filter:'drop-shadow(0px 0px 5px rgba(155,155,155,1))', color:'#fff'}}>
&#10094; &nbsp; {" "} <span className="page-title">
              {props.previous.frontmatter.title}
            </span></button>
          </Link>
        </li>
      )}
      {props.next && props.next.frontmatter.template === "blog-post" && (
        <li style={{}}>
          <Link to={props.next.frontmatter.slug + "/"} rel="next">
          <button className="" style={{display:'flex', justifyContent:'flex-start', textShadow:'2px 2px 0 #222', filter:'drop-shadow(0px 0px 5px rgba(155,155,155,1))', color:'#fff'}}>
            <span className="page-title">{props.next.frontmatter.title}</span> {" "} &nbsp; &#10095;
          </button>
          </Link>
        </li>
      )}
    </ul>
  </div>
)




const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

let count = 0;

const Post = ({ data, pageContext }) => {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark


  const FrontImage = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""


  //   const NftLink = frontmatter.nftlink
  //   const NftRedeem = frontmatter.nftredeem
  //   const NftDrop = frontmatter.nftdrop



  // const Svg = frontmatter.svgImage
  // const svgZindex = frontmatter.svgzindex

// function AddSvg(){
  
//   return (
//     <object className="" id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'', top:'', left:'0', right:'0', bottom:'0', overflow:'', border:'0px solid red', zIndex:'', width:'100vw', height:'', background:'transparent', objectFit:'contain'   }} alt="animated content" title="animated content" ></object>
//   )
// }


// const IsNft = frontmatter.isnftforsale
// const ShowOriginal = frontmatter.youtubeshoworiginal
const ShareThis = frontmatter.shareable
const Comments = frontmatter.comments

const YouTubeStart = frontmatter.youtubestart
const YouTubeEnd = frontmatter.youtubeend
const YouTubeMute = frontmatter.youtubemute
const YouTubeControls = frontmatter.youtubecontrols
const YouTubeAutostart = frontmatter.youtubeautostart

const Suggestion1 = frontmatter.youtubersuggestion1
const Suggestion2 = frontmatter.youtubersuggestion2
const Suggestion3 = frontmatter.youtubersuggestion3

const YoutubeLoop = frontmatter.youtubeloop


if (Suggestion1) {
  <ShowSuggestion />
}
else{

  
}

function ShowSuggestion() {

  return (
<div style={{}}>
  

  
<div style={{width:'100%', maxWidth:'400px', margin:'0 auto 0 auto', fontSize:'90%', padding:'5px 0 ', border:'4px dotted', borderRadius:'12px', textAlign:'center', position:'relative', zIndex:'1', display:'grid', justifyContent:'center'}}>
<IoArrowRedoSharp style={{position:'absolute', top:'0', left:'0', fontSize:'60px', transform: 'rotate(-45deg)', }} />
<IoArrowUndoSharp style={{position:'absolute', top:'0', right:'0', fontSize:'60px', transform: 'rotate(45deg)', }} />
  
  
  <span style={{fontSize:'120%', fontWeight:'bold', textTransform:'uppercase'}}>This is interactive!</span> 
<br />

We recommend these alternatives:
<br /><br />
Click to Copy:<br />
<CopyToClipboard text={Suggestion1}>
  <button>{Suggestion1} </button>
</CopyToClipboard><br />


  <CopyToClipboard text={Suggestion2}>
  <button>{Suggestion2} </button>
</CopyToClipboard><br />

<CopyToClipboard text={Suggestion3}>
  <button>{Suggestion3} </button>
</CopyToClipboard><br />

<br />
Add your own in the comments below!

</div>

<span style={{fontSize:'150%'}}></span>
<div className="mobilespace" style={{ border:'0px solid red'}}></div>
</div>
  )
}

const YoutuberSuggestion1 = frontmatter.youtubersuggestion1
const YoutuberSuggestion2 = frontmatter.youtubersuggestion2
const YoutuberSuggestion3 = frontmatter.youtubersuggestion3
const iframeUrl = "https://www.youtube.com/embed/" + frontmatter.youtuber + ""
  // const YouTube = frontmatter.youtuber



  if (!YoutuberSuggestion1) {
    <IframeSuggestions />
  }
  else{
  
    
  }




  



  function IframeSuggestions() {
    
    return (
      <div>
              <ReactPlayer
              className='react repo'
              // url={iframeUrl}
              // style={{position:'absolute', top:'0', zIndex:'100'}}
              url={[
                iframeUrl,
                YoutuberSuggestion1,
                YoutuberSuggestion2,
                YoutuberSuggestion3
              ]}
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: { showinfo:0, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
                },
              }}
              loop
              playing
              playsinline
              playIcon={
                <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'#111', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
    
            <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
              
    
              <div style={{position:'relative', maxWidth:'100vw', margin:'10% 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>
      <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
    </div>
          
              <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
      <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
              </div>
              </button>}
                // light="../assets/transparent.png"
              />

              
</div>

    )

  }



  function Iframer3() {
    const iframeUrl3 = "https://www.youtube.com/embed/" + frontmatter.youtuber2
    return (

<ReactPlayer
          className='audioframe'
          url={iframeUrl3}
          // url={[
          //   iframeUrl,
          //   Suggestion1,
          //   Suggestion2,
          //   Suggestion3
          // ]}
          width="150px"
          height="150px"
          style={{marginTop:'-50px', position:'absolute', zIndex:'0'}}
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, start:AudioStart, end:AudioEnd, mute:0,  }
            },
          }}
          loop
          playing
          playsinline
          playIcon={
            <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
          
        <div className="" style={{position:'absolute', top:'-200px', left:'10px', zIndex:'', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'center', width:'auto', marginBottom:''}}>
          
      
          {/* <div className="" style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem',}}>Click For Audio</div> */}

          <div className="popped" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.3rem', color:'#999', fontSize:'2rem', background:'rgba(51, 51, 51, 0.3)', borderRadius:'8px', border:'1px solid #666', filter:'drop-shadow(2px 2px 2px #000)', cursor:'pointer'}}><AiOutlineAudioMuted style={{margin:'0 auto', fontSize:'20px', filter:'drop-shadow(2px 2px 2px #000)'}} /><div style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)', color:'#999', }}>Extra Audio</div></div>
          
          </div>
          </button>}
   
            light="../assets/transparent.png"
          />
     




    )
  }


const svgUrl = frontmatter.svgImage.publicURL
  
    


  const YouTube2 = frontmatter.youtuber2
  const AudioStart = frontmatter.audiostart
  const AudioEnd = frontmatter.audioend

  

  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }



  const { siteUrl } = useSiteMetadata()
  const { iconimage } = useSiteMetadata()





  // const [showControls, setShowControls] = useState(false);
  // const [count, setCount] = useState(0);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [timeDisplayFormat, setTimeDisplayFormat] = React.useState("normal");
  const [bookmarks, setBookmarks] = useState([]);
  const [state, setState] = useState({
    pip: false,
    playing: true,
    controls: false,
    light: false,

    muted: false,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    volume: 1,
    loop: true,
    seeking: false,
    url: iframeUrl,
    // url:[
    //   iframeUrl,
    //   YoutuberSuggestion1,
    // ],

  });

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsRef = useRef(null);
  const canvasRef = useRef(null);
  const {
    playing,
    // controls,
    light,
    url,
    muted,
    // loop,
    playbackRate,
    pip,
    played,
    // seeking,
    volume,
  } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleProgress = (changeState) => {
    if (count > 3) {
      controlsRef.current.style.visibility = "visible";
      count = 0;
    }
    if (controlsRef.current.style.visibility === "visible") {
      count += 1;
    }
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (e, newValue) => {
    console.log({ newValue });
    setState({ ...state, played: parseFloat(newValue / 100) });
  };

  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (e, newValue) => {
    console.log({ value: e.target });
    setState({ ...state, seeking: false });
    // console.log(sliderRef.current.value)
    playerRef.current.seekTo(newValue / 100, "fraction");
  };

  const handleDuration = (duration) => {
    setState({ ...state, duration });
  };

  const handleVolumeSeekDown = (e, newValue) => {
    setState({ ...state, seeking: false, volume: parseFloat(newValue / 100) });
  };
  const handleVolumeChange = (e, newValue) => {
    // console.log(newValue);
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  // const toggleFullScreen = () => {
  //   screenful.toggle(playerContainerRef.current);
  // };

  const handleMouseMove = () => {
    console.log("mousemove");
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const hanldeMouseLeave = () => {
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const handleDisplayFormat = () => {
    setTimeDisplayFormat(
      timeDisplayFormat === "normal" ? "remaining" : "normal"
    );
  };

  const handlePlaybackRate = (rate) => {
    setState({ ...state, playbackRate: rate });
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  const addBookmark = () => {
    const canvas = canvasRef.current;
    canvas.width = 160;
    canvas.height = 90;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      playerRef.current.getInternalPlayer(),
      0,
      0,
      canvas.width,
      canvas.height
    );
    const dataUri = canvas.toDataURL();
    canvas.width = 0;
    canvas.height = 0;
    const bookmarksCopy = [...bookmarks];
    bookmarksCopy.push({
      time: playerRef.current.getCurrentTime(),
      display: format(playerRef.current.getCurrentTime()),
      image: dataUri,
    });
    setBookmarks(bookmarksCopy);
  };

  const currentTime =
    playerRef && playerRef.current
      ? playerRef.current.getCurrentTime()
      : "00:00";

  const duration =
    playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
  const elapsedTime =
    timeDisplayFormat === "normal"
      ? format(currentTime)
      : `-${format(duration - currentTime)}`;

  const totalDuration = format(duration);

  

  return (
    
    <Layout className="page">
<CustomBox style={{}}>
<Helmet>
  <body id="body" className="blogpost" style={{background:''}} />
  {/* <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script> */}
</Helmet>

      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        
        image={ siteUrl + getSrc(frontmatter.featuredImage) }

        article={true}
      />



{/* <Seo
          title={`Welcome to the GRID`}
          description={`I tried to picture clusters of information as they moved through the computer. What did they look like? Ships? Motorcycles? Were the circuits like freeways? I kept dreaming of a world I thought I'd never see.`}
          image={'https://allin60.com/tronin60.jpg'}
        /> */}


{/* <div className='player-wrapper intro' style={{position:'relative', bottom:'0', zIndex:'', height:'100vh', maxHeight:'', overflow:'', filter: 'drop-shadow(0 0 20px #000)',  }}> */}
<div id="top"></div>

<div className="pagemenu" style={{display:'none', position:'fixed', bottom:'20px', zIndex:'1',  left:'20px', right:'', justifyContent:'center', width:'', margin:'0 auto', gap:'20px', textShadow:'2px 2px 0 #222', filter:'drop-shadow(0px 0px 5px rgba(155,155,155,1))', color:'#fff' }}>

<label id="menuicon1" htmlFor="openSidebarMenu" className="sidebarIconToggle1" style={{textDecoration:'2px underline #fff', cursor:'pointer'}}>Nav</label>



  <AnchorLink to="#top" style={{}}>
  Top
        </AnchorLink>


    {ShareThis ? (
<AnchorLink to="#sharethis" style={{}}>
  Share
        </AnchorLink>
 ) : (
  ""
)}

{Comments ? (
          <AnchorLink to="#comments" style={{}}>
  Comments
        </AnchorLink>
       
          ) : (
            ""
          )}


<AnchorLink to="#footer" style={{border:'0px solid', }}>
  Footer
        </AnchorLink>


</div>




        

<Controls
            ref={controlsRef}
            onSeek={handleSeekChange}
            onSeekMouseDown={handleSeekMouseDown}
            onSeekMouseUp={handleSeekMouseUp}
            onDuration={handleDuration}
            onRewind={handleRewind}
            onPlayPause={handlePlayPause}
            onFastForward={handleFastForward}
            playing={playing}
            played={played}
            elapsedTime={elapsedTime}
            totalDuration={totalDuration}
            onMute={hanldeMute}
            muted={muted}
            onVolumeChange={handleVolumeChange}
            onVolumeSeekDown={handleVolumeSeekDown}
            onChangeDispayFormat={handleDisplayFormat}
            playbackRate={playbackRate}
            onPlaybackRateChange={handlePlaybackRate}
            // onToggleFullScreen={toggleFullScreen}
            volume={volume}
            onBookmark={addBookmark}
            style={{positon:'absolute', top:'0', zIndex:'900', display:'none'}}
          />



<div className="wrap-element" style={{
  overflow:'hidden',
  // height:'clamp(30vh, 80vh, 100vh)'
  aspectRatio:'16/9',
  }}>




{FrontImage ? (
            <GatsbyImage
              image={FrontImage}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{ width:'100vw',  top:'0', zIndex:'-2', border:'0px solid red !important', paddingBottom:'',}}
            />

          ) : (
          ""
          )}
    








   
    

    


{/* if (!Svg) {
    
  }
  else{
    <AddSvg />
  } */}










<button
          onMouseMove={handleMouseMove}
          onMouseLeave={hanldeMouseLeave}
          ref={playerContainerRef}
          // className={classes.playerWrapper}
        >
          <ReactPlayer
            ref={playerRef}
            style={{position:'', zIndex:''}}
            width="100%"
            height="100%"
          //       url={[
          //   iframeUrl,
          //   Suggestion1,
          //   Suggestion2,
          //   Suggestion3
          // ]}
          // url={[
          //   iframeUrl,
          //   YoutuberSuggestion1,
          //   YoutuberSuggestion2,
          //   YoutuberSuggestion3
          // ]}
            // url={[YoutubePlaylist, IfSuggestion1, IfSuggestion2, IfSuggestion3]}
            // url="https://youtu.be/lZzai6at_xA"
            url={url}
            pip={pip}
            playing={playing}
            controls={false}
            light={light}
            loop={YoutubeLoop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onProgress={handleProgress}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:1, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute, }
              },
            }}

          playsinline
            playIcon={
              <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'', justifyContent:'center', alignItem:'center', paddingTop:''}}>
{/*   
          <div className="" style={{ textAlign:'center', display:'flex', justifyContent:'center', flexDirection:'column', animation:'fadeIn 3s',}}> */}
            
  
            {/* <div style={{position:'relative', maxWidth:'100vw', height:'70vh', margin:'10% 0', zIndex:'', display:'flex', justifyContent:'center', background:'transparent !important',}}>
    <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
  </div> */}



{/* {Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{ width:'100vw', position:'absolute', top:'0', zIndex:'',  border:'0px solid red !important', paddingBottom:'', height:'100vh', background:'#111'}}
            />

          ) : (
          ""
          )} */}
        
            <div style={{display:'grid', placeContent:'center', fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem', width:'100%', position:'absolute', zIndex:'2', top:''}}>Click To Play

    <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} /></div>
            {/* </div> */}


            </button>}
        //  light="../assets/transparent.png"
          />





</button>







{UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty1"
              style={{height:'auto', width:'100%', maxHeight:'100%', overflow:'hidden', position:'absolute', bottom:'0', zIndex:'',
             objectFit:'contain', border:'0px solid red !important', background:'transparent'}}
            />
            
          ) : (
            ""
          )}

          




 




        {/* <div
        className="blog-post-content" style={{ fontSize:'1.1rem', textAlign:'left', aspectRatio:'16/9', padding:'10vh 0', margin:'0 auto', color:'inherit !important', border:'0px solid yellow', position:'', top:'0', left:'0', zindex:'1', display:'grid', placeContent:'center'}}
        dangerouslySetInnerHTML={{ __html: html }}
      > */}


{/* </div> */}


<object className="" id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'', right:'', bottom:'0', overflow:'', border:'0px solid red', zIndex:'', aspectRatio:'', width:'100vw', background:'transparent', objectFit:'cover'   }} alt="animated content" title="animated content" ></object>



        </div>



      {/* </div> */}






      
      {Suggestion1 ? (
            <div style={{position:'relative', top:'0', left:'', bottom:'', zIndex:'', maxWidth:'100vw', height:'85vh'}}>
            <YouTubed />
            </div>
       
          ) : (
            ""
          )}

{Suggestion1 ? (
            <ShowSuggestion style={{position:'relative', top:'', zIndex:'0',}} />
       
          ) : (
            ""
          )}

{ !YouTube2 ? (
            ""
       
          ) : (
            <Iframer3 />
          )}

{/* <AnchorLink className="" to="#sharethis" style={{position:'absolute', top:'0', zIndex:'60'}}>
                About Us 
              </AnchorLink> */}
<div style={{padding:'0 5vw', color:'inherit !important'}}>
      {(previous || next) && <Pagination {...props} />}
      </div>







        
        


     
  









      <article className="blog-post">
        <header style={{height:'', display:'grid', placeContent:'center'}}>
          <section className="article-header1" style={{textAlign:'center', margin:'0', height:'auto', color:''}}>
            <h1 className="tronText" style={{fontSize:'4vw'}}>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
            {/* <TimeAgo date={frontmatter.date} style={{color:'#fff !important'}} /> */}

             <div
        className="blog-post-content" style={{ fontSize:'1.1rem', textAlign:'left', padding:'10vh 12%', margin:'0 auto', color:'inherit !important', border:'0px solid yellow', position:'', top:'0', left:'0', zindex:'1', display:'grid', placeContent:'center'}}
        dangerouslySetInnerHTML={{ __html: html }}
      >


</div>
          </section>
        </header>
 </article>






   


{ShareThis ? (

<section id="sharethis" style={{height:'', marginTop:'10vh', display:'grid', placeContent:'center'}}>

  <br />
<ShareSocial />





</section>
          ) : (
            ""
          )}





       



















{Comments ? (

<section id="comments" style={{height:'', marginTop:'10vh', display:'grid', placeContent:'center'}}>

<CommentBox />


</section>
          ) : (
            ""
          )}























{/* <div style={{padding:'0 0', borderTop:'0px solid', margin:'0 0', textAlign:'center', fontSize:'1.5rem', minWidth:'50%', width:'100%', maxWidth:'', border:'0px solid yellow'}}>


      <div
        className="blog-post-content" style={{ fontSize:'1.1rem', textAlign:'left', width:'100%', maxWidth:'', padding:'10vh 0', margin:'0 auto', color:'inherit !important'}}
        dangerouslySetInnerHTML={{ __html: html }}
      />    
  
 
</div> */}

      

      

   
   <br />
   <GoBack />
   <br />
   <br />
   </CustomBox>

   <section id="footer" style={{height:'', marginTop:'',  background:'rgba(0,0,0,0.30)',}}>
   <Footer />
 </section>
    </Layout>




  )
}



export default Post

export const pageQuery = graphql`
  query BlogPostQueryBlogPostQuery($id: String!) {
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        youtuber
        youtuber2
        youtubeshoworiginal
        youtubersuggestion1
        youtubersuggestion2
        youtubersuggestion3
        youtubestart
        youtubeend
        audiostart
        audioend
        youtubemute
        youtubeloop
        youtubecontrols
        youtubeautostart
        comments
        shareable
        isnftforsale
        nftdrop
        svgzindex
        nftlink
        nftredeem
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        svgImage{
          publicURL
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`