/** @jsx jsx */
import { jsx } from "theme-ui"
// import { graphql } from "gatsby"
// import { RiSendPlane2Line } from "react-icons/ri"
// import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import { Helmet } from "react-helmet"
// import { Footer } from "../components/footer"


const Contact = () => {
  // const Contact = ({ data }) => {
  // const { markdownRemark, site } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark





  
  return (


    <Layout className="contact-page">
      <Helmet>
  <body className="contactpage" />
</Helmet>
      {/* <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      /> */}





      {/* <div className="wrapper fluff">
      <br />
        <h1 style={{fontSize:'4vw', padding:'3%, 8%', textAlign:'center'}}>{frontmatter.title}</h1>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        </div> */}

<div className="wrapper" style={{padding:'0 10%', width:'90vw', maxWidth:'600px', margin:'0 auto', display:'grid', placement:'center' }}>
        <form
          className="contact-form specialfont2"
          action="/thanks"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              <input type="text" name="name" placeholder="Name" required />
            </label>
          </p>
          <p>
            <label>
              <input type="email" name="email" placeholder="your@email.com" required />
            </label>
          </p>
          <p>
            <label>
              <input type="text" name="subject" placeholder="Subject" required />
            </label>
          </p>
          <p>
            <label>
              <textarea name="message" placeholder="Your Message" required></textarea>
            </label>
          </p>


     
<div style={{display:'flex', justifyContent:'space-around', alignItems:'center',}}>

                    {/* <label htmlFor="attachment1" style={{padding: '0', color: '#fff', display:'flex', width:'100%', fontSize:'90%', gap:'15px', justifyContent:'center', alignItems:'center'}}>
                    
                    <input
                        className="file-input hidden"
                        type="file"
                        id="attachment1"
                        name="attachment1"
                        // onChange={this.handleAttachment}
                      />
                      ZIP files preferred
                      </label> */}

            <button
              className="button specialfont1"
              type="submit"
              style={{width:'50%'}}
            >
              Send Message{" "}
            </button>
            </div>
        </form>
      </div>
      <br />
      {/* <Footer /> */}
    </Layout>
  )
}

export default Contact


