// import "./Login.css"
import google from "../assets/search.png"
import linkedin from "../assets/linkedin (2).png"
export default function Login(){
    let body=document.querySelector("body");
    body.style.display="flex";
    body.style.justifyContent="center";
    body.style.alignItems="center";
    body.style.height="100vh"
    return(
        <>
            <div className="login" style={{display:"flex",flexDirection:"column",padding:"20px",border:"2px solid black",borderRadius:"2px"}}>
                <h2 style={{textAlign:"center"}}>Login</h2>
                <br />
                <form>
                <input type="email" class="form-control" placeholder="Email" required/>
                <br />
                <input type="password" class="form-control"  placeholder="Password" required/>
                    <br />
                    <div className=" form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        <a href="/forgot" style={{textDecoration:"none",color:"red",marginLeft:"40px"}}>Forgot Password</a>
                    </div>
                    <button type="Submit" class="btn btn-danger" style={{width:"100%"}}>Login</button>
                    <br />
                
                    
                </form>
                <br />
                <h6 style={{textAlign:"center"}}>Don't have an account ? <a href="/">Resister</a> </h6>
              
                <div style={{textAlign:"center"}}>

                <hr />
                <span typeof="button">
                <img src={google} alt="" height={50} width={50}/>
                </span>
                <span style={{marginLeft:"60px"}}>
                <img src={linkedin} alt="" height={50} width={50}/>
                </span>
                </div>
            </div>
            
        </>
    )
}