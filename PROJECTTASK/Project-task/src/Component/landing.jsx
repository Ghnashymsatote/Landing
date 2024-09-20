import { useState } from "react"
// import "../Component/Landing.css"
import google from "../assets/search.png"
import linkedin from "../assets/linkedin (2).png"
import {useNavigate} from "react-router-dom"
import Navbar from "./NV"
import Axios from "axios"
import Company from "./Company"
import Slide from "./Slide"
import Steps from "./steps"
import Pricing from "./Pricing"
import Footer from "./Footer"
export default function Landing(){
    const Navigate=useNavigate();
    const [pn,setPn]=useState("");
    const add=(e)=>{
      const val=e.target.value.replace(/\D/g,"");
        if(val.length<=10){
            setPn(val)    
        };
    }
    let [data,setData]=useState({
        fname:"",
        lname:"",
        email:"",
        mobile:"",
        password:"",
        cpass:""
    });
    let sb=async(evt)=>{
        evt.preventDefault();
        console.log(data);

        try{
            const res=await Axios.post("http://localhost:3000/signDt?" + new URLSearchParams({
                fname:data.fname,
                lname:data.lname,

                email:data.email,
                mobile:data.mobile,
                password:data.password,
                cpassword:data.cpass
            }))
            console.log(res.data);
            
          
        }catch(e){
            console.log("Error",e);
        }
        setData({
            fname:"",
        lname:"",
        email:"",
        mobile:"",
        password:"",
        cpass:""
        })
    }
    let putData=(event)=>{
        setData((currData)=>{
            return{...currData,[event.target.name]:event.target.value}
        })
    }
    let[logdata,setLogData]=useState({
        emails:"",
        passwords:""
    });
    let Logged=async(event)=>{
        event.preventDefault();
        console.log(logdata);  
        try{
                const res=await Axios.post("http://localhost:3000/LoginData?" + new URLSearchParams({
                name:logdata.emails, 
                password:logdata.passwords
            }))
            
            console.log(res.data);
         

        }catch(e){
            console.log("Error",e);
        }
        setLogData({
            emails:"",
            passwords:""
        })
    }
    let changeData=(event)=>{
        setLogData((currData)=>{
            return{...currData,[event.target.name]:event.target.value}
        })
    }
    let goto=()=>{
        Navigate("/Middle")
    }
    let body=document.querySelector("body");
    body.style.display="flex";
    body.style.flex="column"
    body.style.height="100vh";
    body.style.width="100vw";
    body.style.flexWrap="wrap"
   

    const [isLogin,setIslogin]=useState(true);
    let up=(event)=>{
        setData((currData)=>{
            return{...currData,[event.target.name]:event.target.value}
        })
        console.log(event.target.value);
    }
    const Img=()=>[
        "https://www.google.com/imgres?q=images&imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885_1280.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fphotos%2Ftree-sunset-clouds-sky-silhouette-736885%2F&docid=J7zy-dl2IZQspM&tbnid=aVgXecnmQ_f1MM&vet=12ahUKEwjRrOP2hMqIAxVET2cHHTGGCrIQM3oECBcQAA..i&w=1280&h=797&hcb=2&ved=2ahUKEwjRrOP2hMqIAxVET2cHHTGGCrIQM3oECBcQAA=Slide+1",
        "https://www.google.com/imgres?q=images&imgurl=https%3A%2F%2Ffps.cdnpk.net%2Fimages%2Fhome%2Fsubhome-ai.webp%3Fw%3D649%26h%3D649&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fimages&docid=u1zAUGNbMI4p2M&tbnid=_hvsmLnL5x5NVM&vet=12ahUKEwjRrOP2hMqIAxVET2cHHTGGCrIQM3oECFUQAA..i&w=649&h=434&hcb=2&itg=1&ved=2ahUKEwjRrOP2hMqIAxVET2cHHTGGCrIQM3oECFUQAA=Slide+2",
        "https://www.google.com/imgres?q=images&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fcolorful-design-with-spiral-design_188544-9588.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcolorful&docid=2NTy2wtBMAwQQM&tbnid=gYk_u3Jk6wcmUM&vet=12ahUKEwjRrOP2hMqIAxVET2cHHTGGCrIQM3oECGUQAA..i&w=626&h=358&hcb=2&ved=2ahUKEwjRrOP2hMqIAxVET2cHHTGGCrIQM3oECGUQAA=Slide+3",
        "https://www.google.com/imgres?q=images&imgurl=https%3A%2F%2Fbuffer.com%2Fcdn-cgi%2Fimage%2Fw%3D1000%2Cfit%3Dcontain%2Cq%3D90%2Cf%3Dauto%2Flibrary%2Fcontent%2Fimages%2Fsize%2Fw1200%2F2023%2F10%2Ffree-images.jpg&imgrefurl=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&docid=U9G_8UXPMlqatM&tbnid=5UpJfcabDnVl2M&vet=12ahUKEwjRrOP2hMqIAxVET2cHHTGGCrIQM3oECGYQAA..i&w=1000&h=666&hcb=2&itg=1&ved=2ahUKEwjRrOP2hMqIAxVET2cHHTGGCrIQM3oECGYQAA=Slide+4"
       
    ]
    const [sl,setSl]=useState(0);
    const nx=()=>{
        setSl((pi)=>pi === Img.length - 1 ? 0 : pi + 1);
    }
    const ps=()=>{
        setSl((pi)=>pi === Img.length - 1 ? 0 : pi - 1);
    }
    return(
        <>
          
            <Navbar  class="navbar bg-primary" />
          
           
                
            <main style={{display:"flex",padding:"80px",backgroundColor:"rgba(0,123,255,0.9)",flexWrap:"wrap"}}>
                <div style={{display:"flex",flex:"1",padding:"100px",flexDirection:"column"}}>
                    <h1 style={{color:"white"}}>Discover Top Talent, Effortlessly</h1>
                    <br />
                    <h5 style={{color:"rgba(211,211,211,0.7"}}>Use AI streamline your hiring and connect with top candidates instantly</h5>
                    <br />
                    <br />
                    <div>
                    <button class="btn btn-success" style={{display:"inline-block",marginRight:"70px",height:"50px",width:"250px",boxShadow:"4px 4px 7px rgba(0,0,0,0.2)"}}>Get Started Today</button>
                    <button class="btn btn-success"  style={{display:"inline-block",height:"50px",width:"250px",boxShadow:"4px 4px 7px rgba(0,0,0,0.2)"}}> Know More</button>
                    </div>
                    
                    
                </div>
                <div className="sign" style={{backgroundColor:"white",height:"82vh",display:"flex",flexDirection:"column",padding:"30px",border:"2px solid black",borderRadius:"2px",width:"500px",borderRadius:"15px"}}>
               
                    <div style={{display:"flex",justifyContent:"center", marginBottom:"20px",marginTop:"30px"}}>
                       
                                      <button style={{marginRight:"20px",width:"100%"}} className={`btn btn-primary ${isLogin ? 'active' : ""}`} onClick={()=>setIslogin(true)}>Sign up</button>
                                      <button style={{width:"100%"}}  className={` btn btn-primary ${!isLogin ? 'active' : ""}` }onClick={()=>setIslogin(false)}>Login</button>

                    </div>
                  
                    {
                                        isLogin?(
            
                     <div>
                    
                    <form onSubmit={sb}>
              
                        <div  class="input-group mb-3">
                           <input style={{display:"inline-block"}} type="text" class="form-control f" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1" name='fname' onChange={putData} value={data.fname}  required/>
                             &nbsp;
                             <input style={{display:"inline-block"}} type="text" class="form-control l" placeholder="Last Name" name='lname' onChange={putData} value={data.lname}  required/>
                         </div>
              
                        <input type="email" class="form-control" placeholder="Email" required name='email' onChange={putData} value={data.email}/>
                        <br />
                        <input type="text" class="form-control" placeholder="Mobile Number"  maxLength="10" name='mobile' onChange={putData} value={data.mobile} required/>
                        <br />
                        <input type="password" class="form-control"  placeholder="Password" name='password' onChange={putData} value={data.password} required />
                        <br />
                        <input type="password" class="form-control" placeholder="Confirm Password" name='cpass' onChange={putData} value={data.cpass}/>
                        <br />
                        <div className=" form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
                             <label class="form-check-label" for="exampleCheck1">Terms and Conditions</label>
                  
                        </div>
                        <div class="form-check">
                             <input type="checkbox" class="form-check-input" id="exampleCheck2" required/>
                            <label class="form-check-label" for="exampleCheck2">Privacy and Policy</label>
                        </div>
                        <br />
                        <button style={{width:"100%"}} type="Submit" class="btn btn-danger" >Sign up</button>
      
             
                    </form>
                   
                      
                    </div>
                    ):(
                    <div onSubmit={Logged}>
                        <form>
                            <br />
                <input type="email" class="form-control" placeholder="Email" name='emails' onChange={changeData} value={logdata.emails} required/>
                <br />
                <br />
                <input type="password" class="form-control"  placeholder="Password" name='passwords' onChange={changeData} value={logdata.passwords} required/>
                    <br />
                    <div className=" form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        <a href="/forgot" style={{textDecoration:"none",color:"red",marginLeft:"40px"}}>Forgot Password</a>
                    </div>
                    <br />
                    <br />
                    <button type="Submit" class="btn btn-danger" style={{width:"100%"}}>Login</button>
                    <br />
                
                    
                </form>
                
                
                    </div>)}
                </div>
            </main>
            <div style={{display:"flex",flexWrap:"wrap"}}>
            <Steps />
            </div>
            
            <Slide/>
            <br />
            <Company/>
            <br />
            <Pricing/>
            <div style={{padding:"20px",textAlign:"center"}}>
                <h3>Call To Action</h3>
                <div style={{textAlign:"center"}}>
                <h3>Ready to Hire ? Sign up now and start finding the talent you need!</h3>
                <br />
                <br />
                <button class="btn btn-success">Join Us & Hire Smarter</button>
                </div>
                
            </div>
          
            <Footer/>
            
        </>
    )
}