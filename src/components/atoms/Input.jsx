import './Input.css'

function Input({type, placeholder}) {
    return ( 
        <div id="login_input">
            <input type={type} placeholder={placeholder} />
        </div>
     );
}

export default Input;