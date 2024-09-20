export default function Footer(){
    return(
        <>
            <div className="bg-footer text-center text-sm-start col-sm-13 mt-4 mt-sm-0 py-5 footer-bar" style={{backgroundColor:"#001f3f",display:"flex",borderTop:"2px solid black",width:"100%"}}>
                  <div  style={{display:"flex",backgroundColor:"#001f3f",flex:'1'}} className="py-5 footer-bar col-sm-3">
                  <h2>wolrd</h2>
                  </div>
                  <div className="column align-items-center"  style={{backgroundColor:"#001f3f",flex:'2',display:"flex",padding:"10px",paddingLeft:"20px",paddingRight:"20px",flexWrap:"wrap"}}>
                    
                    <ul style={{flexGrow:"1",cursor:"pointer",color:"white"}}> <b>Contact</b>

                      <li>Email</li>
                      <li>Address</li>
                      <li>Contact Number</li>
                    </ul>
                    <ul style={{flexGrow:"1",cursor:"pointer",color:"white"}}> <b>About Us</b>
                    <li> Clients</li>
                        <li>Careerss</li>
                        <li>T & C</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <ul style={{flexGrow:"1",cursor:"pointer",color:"white"}}> <b>For Emplyers</b>
                         <li>Find Candidates</li>
                        <li>Post a Job</li>
                        <li>How it's works ?</li>
                    </ul>
                    <ul style={{flexGrow:"1",cursor:"pointer",color:"white"}}>  <b>Follow Us</b>
                    <li>Facebook</li>
                        <li>likedin</li>
                        <li>twitter</li>
                    </ul>
                  </div>
            </div>
        </>
    )
}