// import "./forgotpass.css"
export default function forgotpass(){
    let body=document.querySelector("body");
    body.style.display="flex";
    body.style.justifyContent="center";
    body.style.alignItems="center";
    body.style.height="100vh"
    return(
        <>
           <div className="forgot" style={{display:"flex",flexDirection:"column",padding:"20px",border:"2px solid black",borderRadius:"2px",boxShadow:"0 4px 8px rgba(0 0 0 1)"}}>
            <h2 style={{textAlign:"center"}}>Forgot Password ?</h2>
            <br />
                <form>

                <input type="email" class="form-control" placeholder="Email" />
                <br />
                <div>
                <input type="number" class="form-control" placeholder="OTP" />
                {/* <a href="">Resend OTP</a> */}
                </div>
                <br />
                <input type="password" class="form-control" placeholder="Password" />
                <br />
                <button style={{width:"100%"}} type="Submit" class="btn btn-danger">CONTINUE</button>
                </form>
           </div>
        </>
    )
}