import tcs from "../assets/tcsthree.png"
import wipro from "../assets/wiprothree.png"
import google from "../assets/googletwo.png"
import cogni from "../assets/cogni.jpg"
import capgemini from "../assets/capgemini.png"
import genpact from "../assets/genpact.avif"
export default function Company(){
    return(
        <>
          <div style={{padding:"20px",textAlign:"center"}}>
                    <h3>Employee Reviews or Trusted by X+ Recruitment</h3>
                    <div style={{display:'flex',paddingLeft:"170px",paddingTop:"50px",paddingBottom:"50px"}}>
                    <img src={tcs} alt="" width={200} height={200}/>
                    <img src={google} alt="" width={200} height={200}/>
                    <img src={cogni} alt="" width={200} height={200}/>
                    <img src={capgemini} alt="" width={200} height={200}/>
                    <img src={genpact} alt="" width={200} height={200}/>
                    <img src={wipro} alt="" width={200} height={200}/>
                    </div>
            </div>
          
        </>
    )
}