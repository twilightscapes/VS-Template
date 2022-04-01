import * as React from "react"
import { Layout } from "../components/layout"


// import GoBack from "../components/goBack"













export default function Location() {
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Terms of Use`} /> */}

    
<section className="outer section section--gradient" >
      <div className="container" style={{padding: '30px 0'}}>
        
      {/* <div className="mobile"><GoBack /></div> */}

{/* <h1 className="title" style={{fontSize:'50px'}}>Virtual Tour</h1> */}
    

<div style={{width:'90%', margin:'0 auto', textAlign:'center',}}>


<p><strong>Hytron Manufacturing, Inc.</strong><br />
15582 Chemical Lane<br />
Huntington Beach, CA 92649<br />
Phone: <a className="call-button btn" href="tel:7149036701">(714) 903-6701</a><br />
Fax: (714) 903-4381</p>
</div>

<div id="tour" className="virtualtour">
<iframe title="location map" className="virtualtour" width="800" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps?t=m&amp;q=Hytron+Manufacturing,+Inc.+15582+Chemical+Lane+Huntington+Beach,+CA+92649&amp;ie=UTF8&amp;hq=Hytron+Manufacturing,+Inc.&amp;hnear=15582+Chemical+Ln,+Huntington+Beach,+California+92649&amp;cid=11221569908383745326&amp;ll=33.744397,-118.027239&amp;spn=0.034258,0.054932&amp;z=14&amp;iwloc=A&amp;output=embed" allowFullScreen="" loading="lazy" origin="https://testing.hytronmanufacturing.com" style={{maxWidth:'100%', margin:'0 auto', border:'10px solid #333', borderRadius:'12px'}}></iframe>


      </div>




</div>



   
{/* 
    <GoBack /> */}
    <div className="spacer33"></div> 
    </section>
    
    
    </Layout>

  )
}
