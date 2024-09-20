import Navbar from "./NV"
// import "./Mid.css"
export default function Mid(){
    let body=document.querySelector("body");
    body.style.display="flex";

    body.style.alignItems="center";
    body.style.flex="column";
   
    return(
        <> 
            <Navbar/>
            <main style={{backgroundColor:"lightskyblue",height:"100vh",width:"100vw"}}>
                <h1>Main</h1>
            </main>
           
        </>
    )
}