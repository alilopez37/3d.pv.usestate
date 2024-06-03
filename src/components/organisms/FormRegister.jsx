import { useNavigate } from "react-router-dom";
import Field from "../molecules/Field";
import Button from "../atoms/Button";


function FormRegister() {
    const navigate = useNavigate()
    const handleClick = (e) => {
        navigate("/")
    }

    return ( 
        <div id="form_login-box">
            <div id="form_login-field">
                <Field text="Nombre" type="text" placeholder="p.e. alilopez"></Field>
                <Field text="Apellido paterno" type="text" placeholder="p.e. lópez"></Field>
            </div>

            <div id="form_login-button">
                <Button text="Guardar" onClick={handleClick}/>
            </div>
        </div>
     );
}

export default FormRegister;