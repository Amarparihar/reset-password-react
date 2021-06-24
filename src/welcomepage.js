
import { useHistory } from "react-router-dom"

export default function Welcomepage(){
    const history = useHistory();

    let handleClicked = ()=>{
        history.push('/');
    }

    return(
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    
                <div className="col-sm-md-lg-12">
                <div className="bg-danger text-light">
               <h2 className="text-center"> Congradulations..!! </h2> 
                </div>
            <div className=" bg-success text-light">
                <p>You have registered Successfully and you can now login by given below button.
                    You will find the current covid reports after login.</p>
            </div>
            <p className="bg-warning text-center rounded">Thanks for Registered...!!!</p>

            <div >
                <button className="btn btn-primary" onClick={handleClicked}>Take me to the SIGN IN page</button>
            </div>
                </div>
                
                </div>
            </div>
            
        </>
    )
}