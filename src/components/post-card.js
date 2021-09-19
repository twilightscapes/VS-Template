/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import TimeAgo from 'react-timeago'
import Countdown from 'react-countdown'

const Completionist = () => ""

const PostCard = ({ data }) => (

  

<section className="child" style={{position:'relative', height:'', overflow:'hidden'}}>

  <article
    className="post-card"
    style={{display:'', alignItems:'center', justifyContent:'center', width:'100%', height:'', position:'relative', }}
  >






    {data.frontmatter.featuredImage ? (
      <Link to={data.frontmatter.slug}>
        <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image"
          style={{position:'relative', zIndex:'0'}}
        />

      </Link>
    ) : (
      <Link  to={data.frontmatter.slug}><StaticImage className="featured-image" src="../../static/assets/default-og-image.jpg" alt="VidSock Default Image" style={{position:'relative', zIndex:''}} /></Link>
    )}


<div className="post-content" >



{ data.frontmatter.nftdrop ? (
            
<div className="" style={{display:'flex', alignSelf:'center',  position:'absolute', bottom:'66px', width:'100vw', margin:'0 auto'}}>

<div className="countdown" style={{display:'flex', justifyContent:'center', maxWidth:'600px',  margin:'0 auto', backdropFilter:'blur(10px)', color:'#fff', textAlign:'center', padding:'1rem', fontSize:'200%', borderRadius:'12px',border:'1px solid #111', textShadow:'1px 2px 0px #000'}}>
<Countdown date={data.frontmatter.nftdrop}>
{/* <Countdown
date={Date.now() + 20000} className="countdown"> */}

<Completionist />
</Countdown>
</div>

</div>

       
          ) : (

            ""
       
          )}




<h2 className="title">
  <Link 
    to={data.frontmatter.slug}
  >
    {data.frontmatter.title}
    
  </Link>
</h2>

<p style={{minWidth:'20vw', position:'relative', textAlign:'center', border:'0px solid red'}}>
  <TimeAgo date={data.frontmatter.date}/>
</p>
</div>


  </article>
  </section>
)

export default PostCard
