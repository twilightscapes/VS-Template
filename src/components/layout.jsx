import * as React from "react"
import { Footer } from "./footer"
import { Seo } from "./seo"
import '@fontsource/roboto'
import { Link } from 'gatsby-plugin-modal-routing-3'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"
import "../styles/reset.css"
import "../styles/variables.css"
import "../styles/global.css"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import "../assets/scss/style.scss"
export function Layout({ children }) {
  const { iconimage } = useSiteMetadata()

  return (

<>
      <Seo />

      <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div style={{overflow:'hidden'}}>
        {modal ? (
          <>
          <div style={{position:'fixed', top:'60px', right:'5vw', padding:'10px', fontSize:'40px', background:'#111 !important',  opacity:'1 !important', zIndex:'2',  filter:' drop-shadow(0px 4px 3px #000)',}}>
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


<header name="pagetop" >

      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
 
  <label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle">
{/* <Bug className="bug" style={{fontSize:'20px', maxWidth:'80px', opacity:'.3' }}/> */}
{/* <span>MENU</span> */}
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>


 <label aria-label="Background clicks close menu" id="menubgcloser" htmlFor="openSidebarMenu" className="backdrop1" ></label>


   <div id="sidebarMenu" style={{minWidth:'', width:''}}>
  


    <ul className="sidebarMenuInner post-card" style={{maxWidth:'250px', position:'absolute', right:'0', display:'', justifyContent:''}}>


 
 <li className="carto" style={{border:'none', margin:'1rem 0', textAlign:'center'}}>
<Link to="/" aria-label="Return To Home">
<img src={iconimage} alt="Site Logo" width="100%" height="100%" />
{/* <span>VidSocks Don't Stink</span> */}
</Link>
 </li>
 
 <li className="carto" style={{textAlign:'center'}}>
 <Link className="navbar-item txtshadow" to="/contact/">
Contact
</Link>
</li>


 <li className="carto" style={{textAlign:'center'}}>
 <Link className="navbar-item txtshadow" to="/about/">
About
</Link>
</li>


<li className="carto" style={{textAlign:'center'}}>
            <Link className="navbar-item txtshadow" to="/posts/">
           Latest
           </Link>
           </li>


    </ul>






  </div>




</header>





{children}

      
      


      <Footer />
      
      </>

    
  )
}