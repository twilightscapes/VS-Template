import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
// import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo"
import '@fontsource/roboto'
import { Link } from 'gatsby-plugin-modal-routing-3'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"
// import { FaHandPointDown } from "react-icons/fa"
// import Bug from "../../static/assets/vidsock-logo.svg"
import "../styles/reset.css"
import "../styles/variables.css"
import "../styles/global.css"

// import { FiShare } from 'react-icons/fi';
// import { FaRegPlusSquare } from 'react-icons/fa';
// import Fullscreen from "../components/FullScreen"
// import { ImArrowRight } from "react-icons/im"


// import Theme from "../components/theme"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import Audio from '../assets/audio.mp3'
// import TouchUp from '../components/TouchUp'
// import { IoMdFingerPrint } from 'react-icons/io'
import "../assets/scss/style.scss"
// import Consent from './Consent'
// import Install from './install-discount'
// 
// import { BiLeftArrow } from "react-icons/bi"
// import { navigate } from "gatsby";

export function Layout({ children }) {
  const { iconimage } = useSiteMetadata()






  return (
    <div style={{background:''}}> 
<>
      <Seo />
      <SkipNavLink />

      <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div style={{overflow:'hidden'}}>
        {modal ? (
          <>
          <div style={{position:'fixed', top:'60px', right:'5vw', padding:'10px', fontSize:'40px', background:'#111 !important', filter:'none', opacity:'1 !important', zIndex:'2',  filter:' drop-shadow(0px 4px 3px #000)',}}>
          <Link state={{noScroll: true }} to={closeTo}>
            <AiOutlineClose />
          </Link>
          </div>
          </>
        ) : (
<></>
        )}

      </div>
    )}
  </ModalRoutingContext.Consumer>


      {/* <Header /> */}

      
      
      {/* <audio controls="controls" autoplay="false" src={Audio}>
    Your browser does not support the HTML5 Audio element.
</audio> */}

{/* <Fullscreen /> */}

<header name="pagetop" >

{/* <Link to="/"><img id="logo" className="twlogo1" src={twLogo} alt="Twilightscapes Logo" style={{margin:'16px 0 40px 4vw', minWidth:'100px', maxWidth:'100px', height:'auto', padding:'0', border:'0px solid red', position:'fixed', zIndex:'2'}} /></Link> */}







      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle">

  {/* <div className="cornertext" style={{textShadow:'2px', color:'#fff',}}>
  <IoMdFingerPrint style={{fontSize:'50px', }}/>
 <span><br />TAP CORNER<br /> FOR MENU<br />
</span>
    </div> */}

{/* <Bug className="bug" style={{fontSize:'20px', maxWidth:'80px', opacity:'.3' }}/> */}

{/* <span>MENU</span> */}
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>


  <label htmlFor="openSidebarMenu" className="backdrop1" ></label>


   <div id="sidebarMenu" style={{minWidth:'', width:''}}>
  


    <ul className="sidebarMenuInner post-card" style={{maxWidth:'250px', position:'absolute', right:'0', display:'', justifyContent:''}}>

 <li className="carta" style={{border:'none', margin:'1rem 0', textAlign:'center'}}>
 <Link to="/">
<img src={iconimage} alt="Site Logo" width="100%" height="100%" />
{/* <span>VidSocks Don't Stink</span> */}
</Link>
 </li>
 
 <li className="carto" style={{border:'none', margin:'1rem 0', textAlign:'center'}}>
<Link to="/">
<img src={iconimage} alt="Site Logo" width="100%" height="100%" />
{/* <span>VidSocks Don't Stink</span> */}
</Link>
 </li>
 

 <li className="carto" style={{textAlign:'center'}}>
 <Link className="navbar-item txtshadow" to="/about/">
About
</Link>
</li>


 <li className="carto" style={{textAlign:'center'}}>
 <Link className="navbar-item txtshadow" to="/contact/">
Contact
</Link>
</li>

    </ul>






  </div>




</header>







      <SkipNavContent className="intro">{children}</SkipNavContent>
      
      


      <Footer />
      
      </>
    </div>
    
  )
}