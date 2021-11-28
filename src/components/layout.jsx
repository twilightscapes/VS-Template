import React, { useState } from "react"
// import { SkipNavLink } from "./skip-nav"
// import { Header } from "./header"
// import { Footer } from "./footer"
import { IoHandLeft } from "react-icons/io5"
// gatsby develop

import Theme from "../components/theme"
import { Seo } from "./seo"

import { Link } from 'gatsby-plugin-modal-routing-3'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { FaHandPointDown } from "react-icons/fa"
// import Bug from "../../static/assets/logo.svg"
import "../styles/reset.css"
import "../styles/variables.css"
import "../styles/global.css"
import '@fontsource/roboto'

// import { FiShare } from 'react-icons/fi';
// import { FaRegPlusSquare } from 'react-icons/fa';
// import Fullscreen from "../components/FullScreen"
// import Menu from "../components/menu1"




// import Audio from '../assets/audio.mp3'
// import TouchUp from '../components/TouchUp'
// import { IoMdFingerPrint } from 'react-icons/io'
import "../assets/scss/style.scss"
// import Consent from './Consent'
import { useSiteMetadata } from "../hooks/use-site-metadata"
// 
// import { BiLeftArrow } from "react-icons/bi"
import { navigate } from "gatsby";



export function Layout({ children }) {
  const { iconimage } = useSiteMetadata()
  const { menu1 } = useSiteMetadata()
  const { menu2 } = useSiteMetadata()
  const { menu3 } = useSiteMetadata()

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (

<>
      <Seo />


      <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div style={{overflow:''}}>
        {modal ? (
          <>
          <div style={{position:'fixed', top:'0', right:'0', padding:'10px', fontSize:'40px', background:'#111 !important', opacity:'1 !important', zIndex:'2',  filter:' drop-shadow(0px 4px 3px #000)',}}>
          <Link state={{noScroll: true }} to={closeTo}>
            <AiOutlineClose />
          </Link>
          </div>
          </>
        ) : (
""
        )}

      </div>
    )}
  </ModalRoutingContext.Consumer>



  
<header name="pagetop" className={isVisible ? 'left' : ''} >
{/* <header name="pagetop" className=""> */}

      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />

  <label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle popped">


{/* <Bug className="bug" style={{fontSize:'20px', width:'100%', opacity:'.4' }}/> */}
<div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
<div style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 2px #000'}}>MENU</div>

  </label>


  


 <label aria-label="Background clicks close menu" id="menubgcloser" htmlFor="openSidebarMenu" className="backdrop1" ></label>

 <div id="sidebarMenu" className="" style={{minWidth:'', width:''}}>
  

  <ul className="sidebarMenuInner post-card left" style={{maxWidth:'250px', position:'absolute', right:'', display:'', justifyContent:''}}>

     <li className="carta" style={{border:'none', margin:'1rem 0', textAlign:'center'}}>

<object className="" id="vidsock-logo" data={iconimage} type="image/svg+xml" style={{ position:'fixed', opacity:'.2', overflow:'hidden', border:'0px solid red', zIndex:'0', width:'100%', maxWidth:'', height:'auto', background:'transparent'  }} alt="Logo Animated" title="animated content" >Logo</object>
 </li>
 <li className="carto" style={{border:'none', margin:'1rem 0', textAlign:'center'}}>
 <Link to="/">
<img src={iconimage} alt="Logo" width="100%" height="100%" />
</Link>
 </li>



  <li className="carto no-app" style={{textAlign:'center'}}>
 <Link className="navbar-item txtshadow" to="/contact/">
 {menu1}
</Link>
</li>

<li className="carto no-app" style={{textAlign:'center'}}>
 <Link className="navbar-item txtshadow" to="/about/">
 {menu2}
</Link>
</li>

      <li className="carto" style={{textAlign:'center', paddingTop:'1rem'}}>
              <Link title="Examples" className="navbar-item txtshadow neonText" to="/posts/">
              {menu3}
              </Link>
      </li>

 
      <li className="carta">
      <div style={{display:'flex', justifyContent:'center'}}>
<button className="back" onClick={()=>navigate(-1)} style={{padding:'4px 8px', borderRadius:'12px'}}>
        {" "} Continue Choosing 
</button>
</div>
      </li>
   
</ul>
    </div>
</header>


<div className="usability" style={{ display:'flex', alignSelf:'center', flexDirection:'',  position:'absolute', bottom:'0', zIndex:'2', width:'100%', justifyContent:'center'}}>


  <div style={{ display:'flex', gap:'20px', justifyContent:'space-around', padding:'2px 12px', background:'rgba(0,0,0,0.30)', borderRadius:'12px 12px 0 0',}}>
    
  <button type="button" className="" onClick={toggleVisible} style={{wordWrap:'normal', color:'#fff'}}>
  <IoHandLeft style={{float:'left', marginRight:'8px', fontSize:'20px'}} />Left-handed?
</button>



<Theme  style={{display:'flex', alignSelf:'center', color:'#fff'}} />


  

    
    {/* <a href="https://vidsocks.com" target="_blank" rel="noreferrer">Web App by VidSocks</a> &nbsp; | &nbsp; <a href={speedIt} target="_blank" rel="noreferrer">Our Site Report Card</a> */}
    
    </div>

  </div>




        {children}

      
        
  </>
    
  )
}


