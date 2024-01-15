import { useNavigate } from "react-router-dom"
import { RegisterView } from "./RegisterView"

const RegisterContainer = ()=>{
    const navigate = useNavigate()
    
    return(
        <RegisterView
        onClick={()=> navigate("/form-aluno")}
        />
    )
}
export {RegisterContainer}