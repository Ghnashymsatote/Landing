import createAcc from "../assets/signupnew.jpg"
import setup from "../assets/vm.jpg"
import JobOpen from "../assets/jobb.jpg"
import Interview from "../assets/interviewreview.jpg"
export default function Steps(){
    return(
        <>
            <div style={{padding:"20px",display:'flex',flexDirection:"column",flexWrap:"wrap",paddingLeft:"50px",textAlign:'center'}}>
                <h3>Get Started 4 Easy Steps</h3>
                <div style={{display:"flex",padding:"20px",flexWrap:"wrap",marginLeft:"120px"}}>
                <div class="card" style={{width:"18rem",marginLeft:"0px",flexGrow:"1"}}>
                    
                    <div>
                    <img src={createAcc} class="card-img-top" alt="..." style={{width:"100%"}}/>
                    </div>
                    <div class="card-body">
                         <h5 class="card-title">Create Your Account</h5>
                         <p class="card-text">Sign up with your comnay details to get started.</p>
                        
                    </div>
                </div>
                <div class="card" style={{width:"18rem",marginLeft:"30px",flexGrow:"1"}}>
                    <div>
                    <img src={setup} class="card-img-top" alt="..." style={{width:"100%"}}/>
                    </div>
                    
                    <div class="card-body">
                         <h5 class="card-title">Set Up Your Compnay Profile</h5>
                         <p class="card-text">Complete your compnay profile to attract top talent</p>
                         
                    </div>
                </div>
                <div class="card" style={{width:"18rem",marginLeft:"30px",flexGrow:"1"}}>
                    <div style={{height:"50px"}}>
                    <img src={JobOpen} class="card-img-top" alt="..." style={{width:"100%"}}/>
                    </div>
                   
                    <div class="card-body">
                         <h5 class="card-title">Post Job Opeaning</h5>
                         <p class="card-text">Create and manage your job listings effortlessly.</p>
                    </div>
                </div>
                <div class="card" style={{width:"18rem",marginLeft:"30px",marginRight:"30px",flexGrow:"1"}}>
                    
                    <div>
                    <img src={Interview} class="card-img-top" alt="..." style={{width:"100px"}}/>
                    </div>
                    <div class="card-body">
                         <h5 class="card-title">Review Candidates & Schedule Interview</h5>
                         <p class="card-text">Evaluate AI-ranked candidates and arrange interviews.</p>
                    </div>
                </div>

                </div>
                
                

            </div>
        </>
    )
}