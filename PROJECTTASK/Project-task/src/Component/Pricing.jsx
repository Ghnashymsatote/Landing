
import PR from "../assets/table.jpg"
export default function Pricing(){
    return(
        <>
            <div style={{padding:"20px",textAlign:"center"}}>
                    <h3>Pricing Plans</h3>
                    <div style={{padding:"5px",textAlign:'center'}}>
                            <h4>Highlight what's include in each tier</h4>
                            <br />
                            <img src={PR} alt="" width={600}/>
                            <br />
                            <br />
                            <br />
                            <button class="btn btn-success">Choose Plan</button>
                    </div>
            </div>
        </>
    )
}