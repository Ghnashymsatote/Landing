export default function Slide(){
    return(

        <>
                    <div style={{padding:"20px",textAlign:'center'}}>
                <h2>Why Choose Us</h2>
                <br />
                <div style={{paddingLeft:"500px",paddingRight:"500px"}}>
                    <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner" >
                        <div class="carousel-item active">
                            <div class="card" >
                                <div class="card-body">
                                    <h5 class="card-title">Advanced Search and Filter</h5>
                                    <br /><br />
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Leverage cutting-edge AI to identify the best candidates swiftly and accurately</h6>
                                   
                                </div>
                             </div>
                        </div>
                    <div class="carousel-item">
                    <div class="card" >
                                <div class="card-body">
                                    <h5 class="card-title">Detailed Candidate Analytics</h5>
                                    <br /><br />
                                    <h6 class="card-subtitle mb-2 text-body-secondary"> Make data-driven decisions with our in-depth candidate analytics.</h6>
                                </div>
                             </div>
                        </div>
                    <div class="carousel-item">
                    <div class="card" >
                                <div class="card-body">
                                    <h5 class="card-title">Integrated Recruitment Solutions</h5>
                                    <br /><br />
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Streamline your hiring operations with our all-in-one recruitment platform</h6>
                                </div>
                             </div>
                     </div>
                    </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            
            </div>
        </>
    )
}