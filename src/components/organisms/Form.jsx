import { Link, useNavigate } from "react-router-dom";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './Form.css'

function Form() {
    const navigate = useNavigate()
    const handleClick = (e)=> {
        navigate("/home")
    }

    return ( 
        <div id="form_login-box">
            <div id="form_login-field">
                <Field text="Username" type="text" placeholder="p.e. alilopez"></Field>
                <Field text="Password" type="password" placeholder="Password"></Field>
            </div>

            <div id="form_login-button">
                <Button text="Iniciar sesión" onClick={handleClick}/>
            </div>
            <div>
                No tienes cuenta, <Link to="/register">registrate</Link>
            </div>
        </div>
     );
}

export default Form;