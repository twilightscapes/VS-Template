import * as React from "react"
import { Layout } from "../components/layout"
import { FaFileDownload } from 'react-icons/fa'

// import GoBack from "../components/goBack"













export default function Careers() {
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Terms of Use`} /> */}

    
<section className='section outer'>
  
   <div className="container" style={{marginTop:'30px'}}>
   <h3 className="" style={{textAlign:'center', fontSize:'160%',}}>
  Employment at Hytron
   </h3>
   </div>
   
   
  <div className='container content' style={{padding:'clamp(1rem, 4%, 10%)'}}>
         
         
 
 
<h2>Careers</h2>
 
 <p>We offer very challenging job opportunities producing parts for some of the most exciting global industries. Hytron offers it's full-time employees very competitive wages and a complete range of generous benefits which include a 401K retirement plan, paid vacation, paid holidays and optional medical and dental insurance plans. </p>
 



<div className="flexbutt" style={{gap:'30px'}}>

 <div className="flexcheek"><h2>Current Positions Available</h2>
 <br />
 <h3><strong>CNC Operator</strong></h3>
 <p>Hytron is currently looking for CNC operators. Preference will be given to candidates that have experience in CNC laser cutting and have a minimum of two years experience. Successful candidates must have Vertical or Horizontal Machine experience and a commitment to quality, safety, and customer satisfaction.</p>
 
 <h3><strong>CNC Setup Technician</strong></h3>
 <p>Hytron is currently looking for an experienced CNC setup technician for our HAAS vertical mills. Minimum of 5 years experience and must be familiar with our Mastercam Software. Successful candidates must have Vertical or Horizontal Machine experience and a commitment to quality, safety, and customer satisfaction.</p>
 <br />
 </div>

 <div className="flexcheek">
 <h2>Other Positions Not Currently Available</h2>
 <br />
 <strong>Quality Control Inspector</strong><br />
 <strong>CNC Lathe Operator</strong><br />
 <strong>Tool &amp; Die Maker</strong><br />
 <br /><br />
 Our shop operating hours are per below (with some occasional overtime):<br />
 Hours 6:00am - 2:30pm Mon-Fri<br />
 <br />

 <p>If you have the talent, believe you qualify, and want to join our team then please fill out our online contact form, submit your resume and download our Job Application form. Complete the form and upload it to us for evaluation and possible job interview.</p>
 </div>
 </div>


<div className=" "  style={{color:'#fff', textDecoration:'none', display:'flex', justifyContent:'center', position:'relative', margin:'0 auto', padding:'2rem',}}>

<a className="button" target="_blank" download="HytronJobApp.pdf" href="../hytron-manufacturing-job-app.pdf" style={{textDecoration:'none'}}>Download Job Application <div style={{float:'', position:'relative', padding:'0 0 0 10px'}}> <FaFileDownload /></div></a></div>
 
  </div>
  </section>
    <div className="spacer33"></div> 

    
    
    </Layout>

  )
}
