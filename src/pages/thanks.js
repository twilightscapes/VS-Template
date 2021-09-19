import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import { Seo } from "../components/seo"
import { Layout } from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Thank you" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
        width:'80%',
        margin:'0 auto',
      }}
    >
<div className="spacer33"></div> 
      <RiCheckboxCircleLine className="neonText" 
        style={{
          fontSize: "150px",
          color: "var(--primary-color)",
          margin:'0 auto',
          textAlign:'center'
        }}
      />
      <h1 className="neonText" style={{fontSize:'200%'}}>Got your message</h1>
      {/* <p>I should respond shortly, depending on where I am at.</p> */}
      <div className="spacer33"></div> 
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Lets go back to Homepage
      </Link>
    </div>



    <iframe title="AdFree YouTube" id="youtube" className="blog-video" width="100%" height="400" src="https://www.youtube.com/channel/UCccK2S9xrcLnCR3dTuUwsxQ" frameBorder="0" playsInline />


    <div className="spacer33"></div> 
    {/* <div className="spacer66"></div>  */}
  </Layout>
)

export default Thanks
