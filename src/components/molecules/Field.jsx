import Input from "../atoms/Input";
import Label from "../atoms/Label";

function Field({text, type, placeholder}) {
    return ( 
        <div style={{width:"100%"}}>
            <Label text={text}/>
            <Input type={type} placeholder={placeholder}/>
        </div>
     );
}

export default Field;