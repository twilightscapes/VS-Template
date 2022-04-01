// import React from "react"
import React, { useState, useRef } from "react";
import { Link, graphql } from "gatsby"
import ReactPlayer from 'react-player/lazy'
import { Layout } from "../components/layout"
import { Footer } from "../components/footer";
import { Seo } from "../components/seo"
import { ImPlay } from "react-icons/im"
import { GatsbyImage } from "gatsby-plugin-image"
// import { StaticImage } from "gatsby-plugin-image"
// import Controls from "../components/Controls";
import { Helmet } from "react-helmet"
import { getSrc } from "gatsby-plugin-image"
import BlogListHome from "../components/blog-list-home"
import Newsignup from "../components/newssign"
// import Details from "../components/equipment-list"
import Contact from "../components/Contact-inc"
import SocialMe from "../components/share"
// import FrontLoader from "../../static/assets/grid-loader.svg"
// import { RiArrowRightSLine } from "react-icons/ri"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { AnchorLink } from "gatsby-plugin-anchor-links";
// import BackgroundImage from 'gatsby-background-image'
// import Panel1 from "../components/panel1"
// import Panel2 from "../pages/shawshank-trailer"



// import TimeAgo from 'react-timeago'
// import Countdown from 'react-countdown'

export const pageQuery = graphql`
  query HomeQueryHomeQuery($id: String! ) {
    
    
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
        showfooter
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
        showFeature
        showPosts
        showInfo
        youtuber
        youtubestart
        youtubeend
        youtubemute
        youtubecontrols
        youtubeautostart
        svgzindex
        tagline
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        secondaryImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 800)
          }
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        cta {
          ctaText
          ctaLink
        }
        svgImage{
          relativePath
        }
      }
    }





  
    capability1: file(relativePath: { eq: "transparent.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED,)
      }
    }
    capability2: file(relativePath: { eq: "transparent.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    capability3: file(relativePath: { eq: "transparent.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }



    

    

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            slug
            title
            nftdrop
  
            
            featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`










const HomePage = ({ data }) => {


//  const Capability1 = data.capability1.childImageSharp.gatsbyImageData
//  const Capability2 = data.capability2.childImageSharp.gatsbyImageData
//  const Capability3 = data.capability3.childImageSharp.gatsbyImageData

//  const imageData = data.desktop.childImageSharp.fluid

  // const { postcount } = useSiteMetadata()
  const { markdownRemark, posts } = data 
  const { frontmatter, html, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    const SecondaryImage = frontmatter.secondaryImage
    ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    : ""
  
    // const UnderlayImage = frontmatter.underlayImage
    // ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    // : ""

    // const { iconimage } = useSiteMetadata()

    // const imageData = data.desktop.childImageSharp.fluid
    const { siteUrl } = useSiteMetadata()

    const YouTubeStart = frontmatter.youtubestart
    const YouTubeEnd = frontmatter.youtubeend
    const YouTubeMute = frontmatter.youtubemute
    const YouTubeControls = frontmatter.youtubecontrols
    const YouTubeAutostart = frontmatter.youtubeautostart

    const ShowFeature = frontmatter.showFeature
    const ShowInfo = frontmatter.showInfo
    const ShowPosts = frontmatter.showPosts

    const Svg = frontmatter.svgImage
    const svgZindex = frontmatter.svgzindex
    if (!Svg) {
      
    }
    else{
      <AddSvg />
    }


    function AddSvg(){
      const svgUrl = "../assets/" + frontmatter.svgImage.relativePath + ""
      return (
        <object title="Animation: Milky Way rotating over Todd Lambert while he is camping in front of a campfire" className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', bottom:'0', left:'0', right:'0', top:'0', overflow:'hidden', display:'block', border:'2px solid red', zIndex:'', width:'100vw', height:'100vh',  }} alt="Animation: Milky Way rotating over Todd Lambert while he is camping in front of a campfire" ></object>
      )
    }



    const [state] = useState({
      playing: true,
      controls: false,
      light: true,
      muted: true,
      loop: true,
    });
    const playerRef = useRef(null);
    // const controlsRef = useRef(null);
    
    const {
      playing,
      controls,
      light,
      muted,
      loop,
      // playbackRate,
      // pip,
      // played,
      // seeking,
      // volume,
    } = state;
    
    // const handlePlayPause = () => {
    //   setState({ ...state, playing: !state.playing });
    // };
    
    // const hanldeMute = () => {
    //   setState({ ...state, muted: !state.muted });
    // };
    
    const { iconimage } = useSiteMetadata()

 




const YouTube = frontmatter.youtuber

if (!YouTube) {

}
else{
  
  <Iframer />
}

function Iframer() {
  

  const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""
  return (
    <ReactPlayer
    className='react-player66'
    url={Url}
    
    // url={[
    //   iframeUrl,
    //   YoutuberSuggestion1,
    //   YoutuberSuggestion2,
    //   YoutuberSuggestion3
    // ]}
    width="100%"
    height="100%"

    config={{
      youtube: {
        playerVars: { showinfo:1, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
      },
    }}
    loop
    playing
    playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>

    <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'80vw', margin:'0 auto'}}>
    

      <div style={{position:'relative', maxWidth:'100vw', margin:'4% 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>
<img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', maxWidth:'30vw', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
</div>

      <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
<ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
      </div>
      </button>}
        light="../assets/transparent.png"
    />
  )
}


// const options = {
//   settings: {
//     autoplaySpeed: 4000,
//     boxShadow: '0px 0px 20px #000',
//     disableKeyboardControls: false,
//     disablePanzoom: false,
//     disableWheelControls: true,
//     hideControlsAfter: false,
//     lightboxTransitionSpeed: 0.3,
//     lightboxTransitionTimingFunction: 'linear',
//     overlayColor: 'rgba(0, 0, 0, 0.8)',
//     slideAnimationType: 'slide',
//     slideSpringValues: [300, 50],
//     slideTransitionSpeed: 0.6,
//     slideTransitionTimingFunction: 'linear',
//     usingPreact: false
//   },
//   buttons: {
//     backgroundColor: '#FA02B7',
//     iconColor: 'rgba(255, 255, 255, 0.8)',
//     iconPadding: '10px',
//     showAutoplayButton: false,
//     showCloseButton: true,
//     showDownloadButton: false,
//     showFullscreenButton: false,
//     showNextButton: false,
//     showPrevButton: false,
//     showThumbnailsButton: false,
//     size: '40px'
//   },
//   caption: {
// captionAlignment: 'start',
// captionColor: '#FFFFFF',
// captionContainerPadding: '20px 12% 30px 12%',
// captionFontFamily: 'inherit',
// captionFontSize: 'inherit',
// captionFontStyle: 'inherit',
// captionFontWeight: 'inherit',
// captionTextTransform: 'inherit',
// showCaption: false
//   },
//   thumbnails: {
//     showThumbnails: false,
//     thumbnailsAlignment: 'center',
//     thumbnailsContainerBackgroundColor: '#111',
//     thumbnailsContainerPadding: '0',
//     thumbnailsGap: '0 2px',
//     thumbnailsIconColor: '#ffffff',
//     thumbnailsOpacity: 0.4,
//     thumbnailsPosition: 'bottom',
//     thumbnailsSize: ['100px', '80px']
//   },
//   progressBar: {
//     backgroundColor: '#000',
//     fillColor: '#333',
//     height: '3px',
//     showProgressBar: true
//   },
// };
  
  return (

    <Layout>
    <Helmet>
  <body className="homepage" style={{background:''}} />
</Helmet>
{/* <Seo
          title={`VidSock - Video Multimedia NFT Platform`}
          description={`Create, display and market your NFTs with VidSock`}
          image={'https://vidsock.com/default-og-image.jpg'}
        /> */}
       <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
  //       image={photoUrl}
  //  photoUrl

   image={ siteUrl + getSrc(frontmatter.featuredImage) }
/>
      




{/* VIDEO URLS */}
{/* uCf3Q43fC_4 cool train */}







{ShowFeature ? (
<>
<div className="RArrow"><span></span></div>
<div className="horizontal-holder allin60panel" style={{position:'relative',  overflow:'', color:'#ccc', border:'1px solid transparent'}}>



<div className="horizontal-scroll panels" style={{}}>




<div className="panelspacer" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'', height:'50%', paddingTop:'50%', background:''}}></div>

<div id="" className="wrap-element " style={{overflow:'', width:'100vw', height:'85vh', position:'relative', top:'0', zIndex:'', marginBottom:''}}>


{/* <div style={{position:'absolute', objectFit:'', top:'0', zIndex:'-1', placeContent:'', background:'#111', width:'100vw', height:'100vh'}}>
          {Image ? (
            <GatsbyImage
              image={Image}
              loading="eager"
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'', position:'fixed', top:'0', zIndex:'', objectFit:'cover', overflow:'', backgroundSize:'cover', border:'0px solid red !important', background:'#111', aspectRatio:'none'}}
            />
            
          ) : (

   
            <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'100vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}
</div> */}


<ReactPlayer
            ref={playerRef}
            width="100%"
            height="100%"
            style={{position:'absolute', zIndex:'-1'}}
            url={YouTube}
            // url="https://www.youtube.com/embed/videoseries?list=PLSld2C-SHcw6iI-8VdTwswUmghftk2chW"
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            muted={muted}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, autoplay:1, controls:0, start:10, end:2000, mute:1  }
              },
            }}

            playsinline
            playIcon={
              <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'1px solid transparent', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'', justifyContent:'center', alignItem:'center', paddingTop:''}}>

            
  
            <div style={{position:'fixed', width:'100vw', height:'', top:'5px', margin:'0', zIndex:'1', display:'flex', justifyContent:'center', background:'transparent !important',}}>
    {/* <img className="homepage-bg" src="../../assets/daniel-smyth-PcvlAQKAPXk-unsplash.jpg" alt="Hytron" style={{ width:'100%', height:'100vh', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} /> */}

    {/* <StaticImage placeholder="blurred" loading="eager" src="../../static/assets/daniel-smyth-PcvlAQKAPXk-unsplash.jpg" alt="Twilightscapes Default Image" style={{ width:'100%', height:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} /> */}

    {/* {Image ? (
  <GatsbyImage
              image={Image}
              loading="eager"
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{ width:'100%', height:'100vh', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}}
            />

          ) : (
          ""
          )} */}


  </div> 



  {/* {Image ? (
  <GatsbyImage
              image={Image}
              loading="eager"
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'100vh', width:'100vw', maxHeight:'', position:'absolute', top:'0', zIndex:'', objectFit:'cover', overflow:'', backgroundSize:'cover', border:'0px solid red !important', background:'#111', aspectRatio:'none'}}
            />

          ) : (
          ""
          )} */}

        
            <div style={{display:'grid', placeContent:'center', fontWeight:'bold', padding:'50% 0 0 0', fontSize:'clamp(2rem, 3.5vw, 3.8rem)', textShadow:'2px 2px 0 #111', width:'100%', position:'absolute', zIndex:'2', top:'', height:'100%', border:'1px solid transparent'}}>Learn more

    <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} /></div>
            {/* </div> */}


            </button>}
        //  light="../assets/transparent.png"
          />
          



          {/* <div style={{position:'absolute', width:'100vw', height:'100vh', top:'5px', margin:'0', zIndex:'-1', display:'flex', justifyContent:'center', background:'transparent !important',}}>
  {Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )}
  </div> */}





          {/* <div style={{position:'relative', padding:'10% 0', width:'', height:'', zIndex:'3'}}>
<h1
    className="lineOne"
    style={{
     color: 'white',
      textAlign: 'center', 
      letterSpacing: '.0rem',
      fontSize:'clamp(1rem, 3.5vw, 3.8rem)',
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
            fontSize:'clamp(1rem, 3.5vw, 3.8rem)',
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
            fontSize:'clamp(1rem, 3.5vw, 3.8rem)',
            filter:'dropShadow(1px 2px 4px rgba(0,0,0,.9))',
            textShadow:'2px 2px 0 #333'
          }}
        >
         Done right AND on time
        </h3>
</div> */}









          
          </div>



          {/* <Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          />


          {/* show feature */}
        











{/* <div className="custom-cursor " style={{margin:'', height:'100%', textDecoration:'none'}}>

  <Panel1 />

</div> */}


{/* <div>
<StaticImage className=""
alt="Delicious!" src="../../static/assets/FAROE-ISLAND-SALMON-scaled.jpg" />
</div> */}



{/* <div>
<StaticImage className=""
alt="Get Racked at the Rack House" src="../../static/assets/NEW-ZEALAND-RACK.jpg" />
</div> */}



{/* <div>
<StaticImage className=""
alt="" src="../../static/assets/HICKORY-SMOKED-OF-WS.jpg" />
</div> */}




{ShowPosts ? (
        <BlogListHome data={posts} style={{}} />
   ) : (
    ""
  )}

<div>
</div>

{/* <div className="allin60panel" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'100%', margin:'0', background:''}}>
<div style={{ width:'90vw', position:'relative', top:'', margin:'20px auto', padding:'4% 5%', zIndex:'3', textAlign:'', borderRadius:'12px', textDecoration:'none', color:'#cccc'}}>
  <Newsignup />
  </div>
</div> */}

</div>


</div>
</>
) : (
  ""
)}







<div id="intro" name="container21" className="container21" style={{position:'relative', zIndex:'1', paddingTop:'10%'}}>

{/* <div className="" style={{textAlign:'center', padding:'1rem', marginTop:'0' }}>
      <Link state={{modal: true}} to="/contact/" className="button specialfont" style={{display:'flex', alignSelf:'center', margin:'0 auto', textDecoration:'none', fontSize:'clamp(1rem, 2vw, 2.8rem)', maxWidth:'40vw',}}>Request Quote</Link>
 </div> */}

{/* show feature */}
        {ShowFeature ? (
            
       
          


        
<section style={{ display:'',}}>
  <article>

  <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>




{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'', position:'absolute', top:'', zIndex:'0', objectFit:'contain', overflow:'', border:'0px solid red !important'}}
            />
            
          ) : (

   
     ""
  
          )}






{/* if(navigator.standalone) {
    "Thanks for using our PWA!"
} else {
    "Please consider downloading our PWA."
} */}





 

  {Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )}





{/* {UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100vw', maxHeight:'100vh', position:'absolute', bottom:'0', zIndex:'1',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )} */}


  
{YouTube ? (
            <Iframer />
       
          ) : (
            ""
          )}




      </div>
  </article>
</section>

) : (
  ""
)}
{/* end show feature */}






{/* show Info */}
{ShowInfo ? (
            
       


<section style={{ display:'', height:'', overflow:''}}>
  <article>
<div className="flexbutt" style={{display:'flex', gap:'30px'}}>
      <div className="flexcheek " style={{padding:'0 2rem 0 2rem', maxHeight:'',}}>


      <h1 className="title1" style={{fontSize:'clamp(2rem, 5vw, 3rem)', textAlign:'left', marginLeft:''}}>
            {frontmatter.title}
            {/* Today's Popular Subjects <br /> */}
            {/* The Rack House */}
          </h1>
          <h2
            className="tagline1"
            sx={{
              color: "",
            }}
          >
            {frontmatter.tagline}
          </h2>





          <div
          style={{padding:'0', fontSize:'clamp(1rem, 2vw, 2.8rem)',}}
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />


  

          <Link state={{modal: true}} 
            to={frontmatter.cta.ctaLink}
            className="button fire actionJackson specialfont"
            style={{
              cursor:'pointer',
              width:'80%',
              maxWidth:'600px',
              margin:'0 auto',
              display:'flex',
              alignSelf:'center',
              color:'#ccc',
              fontSize:'130%'
            }}
          >
            {frontmatter.cta.ctaText}
   

            

          </Link>

         


{/* <AnchorLink 
className="actionJackson txtshadow"
style={{
  cursor:'pointer',
  width:'70%',
  margin:'0 auto'

}} 
to="#experiences" title="See the new EXPERIENCES™" /> */}




{/* <span className="actionJackson txtshadow"> <span className="icon -right">
              <FaHandPointDown />
            </span> &nbsp;&nbsp;All New EXPERIENCES &nbsp;&nbsp;<span className="icon -right">
              <FaHandPointDown />
            </span></span> */}
          


      </div>



        


      <div className="flexcheek" style={{position:'relative', maxHeight:'', overflow:'', marginBottom:'', borderRadius:'0 0 12px 12px'}}>
 
 


      <div style={{margin:'0 30px', zIndex:'', borderRadius:'12px', maxHeight:'', overflow:'', position:'relative', display:'', justifyContent:'', alignItems:'', flexDirection:'column'}}>
   



      <div style={{position:'relative', top:'', margin:'0', padding:' 0',  width:'', zIndex:'1', textAlign:'', borderRadius:'12px',}}>
  <Newsignup />
  </div>

           {/* {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="post-card"
              style={{border:'0px solid red', width:'100%', height:'', maxHeight:'',  borderRadius:'12px', position:'', backgroundSize:'cover', objectFit:'cover', top:'0', zIndex:'0'}}
            />
          ) : (
            ""
          )} */}









{/* <ScrollAnimation animateIn="bounceInDown" delay={350} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} >
<div style={{position:'relative', top:'0px', paddingRight:'', border:'0px solid yellow', zIndex:'0'}}>
  <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'1rem 0 0 0',
    padding:'0',
  }}
>
Only Available<br />
Through NFT
</h2>
</div>
</ScrollAnimation> */}



{/* <div style={{fontSize:'120%', textAlign:'center', margin:'1rem', textShadow:'2px 2px 0 #000'}}><Link state={{modal: true}} to="/about/">Learn More About The VidSock Platform Here</Link></div> */}

</div>

      
      







      </div> 
</div>
</article>
</section>


) : (
  ""
)}
{/* end show Info */}



{/* <div style={{textAlign:'center', fontSize:'5vw', margin:'10vh 0 0 0'}}>Latest Minutes:</div> */}




{/* end show Posts */}
{/* {ShowPosts ? (

<div id="posts" name="posts">
  
 
        <BlogListHome data={posts} />


       
        
        <div style={{textAlign:'center'}}><Link className="post-card button " to="/minutes/" style={{textDecoration:'none', color:'inherit', textAlign:'center'}}>More Minutes <RiArrowRightSLine style={{fontSize:'50px'}} /></Link>
        </div>



 

  
</div>

   ) : (
    ""
  )} */}
{/* end show Posts */}


 </div>{/* end scooch */}

      

 










{/* <div id="capabilities" className="" style={{position:'relative', zIndex:'2', textAlign:'', padding:'clamp(1rem, 8%, 15%)', fontSize:'clamp(1rem, 2vw, 2.8rem)', margin:'20px auto 0 auto', maxWidth:'1600px'}}>


<h2 style={{fontSize:'clamp(2rem, 5vw, 3rem)', textAlign:'center', marginBottom:'1.5rem'}}>Our Capabilities</h2>


<div className="flexbutt noexit print" style={{padding:'0',
position:'relative', height:'', width:'', overflow:'', display:'flex', gap:'20px', margin:'0 auto 2rem auto', }}>



<div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'flex-start', pointerEvents:''}}>
    <AnchorLink className="" to="#iso" style={{textDecoration:'none', textAlign:'center', color:'inherit',}}>
    {Capability1 ? (
            <GatsbyImage
              image={Capability1}
              alt="Image Alt Text"
              className=""
              style={{borderRadius:'8px'}}
            />
          ) : (
            ""
          )}
          <div className="specialfont2" style={{fontSize:'clamp(1.6rem, 2vw, 2.8rem)', position:'absolute', top:'40%', width:'100%', textAlign:'center', textShadow:'2px 2px 1px #333', background:'rgba(0, 0, 0, .6)', color:'#ccc', padding:'1rem 0'}}>ISO 9001 Certified</div>
    </AnchorLink>
    </div>


    
    <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'flex-start', pointerEvents:''}}>
    <AnchorLink className="" to="#about" style={{textDecoration:'none', color:'inherit',}}>
    {Capability2 ? (
            <GatsbyImage
              image={Capability2}
              alt="Image Alt Text"
              className=""
              style={{borderRadius:'8px'}}
            />
          ) : (
            ""
          )}
          <div className="specialfont2" style={{fontSize:'clamp(1.6rem, 2vw, 2.8rem)', position:'absolute', top:'40%', width:'100%', textAlign:'center', textShadow:'2px 2px 1px #333', background:'rgba(0, 0, 0, .6)', color:'#ccc', padding:'1rem 0'}}>
            Learn About Hytron</div>
    </AnchorLink>
    </div>



    <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'flex-start', pointerEvents:''}}>
    <AnchorLink className="" to="#equipmentlist" style={{textDecoration:'none', color:'inherit'}}>
    {Capability3 ? (
            <GatsbyImage
              image={Capability3}
              alt="Image Alt Text"
              className=""
              style={{borderRadius:'8px'}}
            />
          ) : (
            ""
          )}
          <div className="specialfont2" style={{fontSize:'clamp(1.6rem, 2vw, 2.8rem)', position:'absolute', top:'40%', width:'100%', textAlign:'center', textShadow:'2px 2px 1px #333', background:'rgba(0, 0, 0, .6)', color:'#ccc', padding:'1rem 0'}}>
            Our Equipment List</div>
    </AnchorLink>
    </div>


</div>

</div> */}











































<div id="contact" className="" style={{position:'relative', zIndex:'2',
 width:'', maxWidth:'800px', display:'grid', placeContent:'center', padding:'0 10%', margin:'0 auto', marginTop:'10vh'}}>
<h2 style={{fontSize:'clamp(2rem, 5vw, 3rem)', textAlign:'center'}}>Contact</h2>
<Contact />
</div>




<div style={{position:'relative', top:'', margin:'10vh 0', padding:'0',  width:'', }}>
<SocialMe />
</div>

<Footer />
    </Layout>
  )
}

export default HomePage
  

