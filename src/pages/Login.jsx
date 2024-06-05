import Form from "../components/organisms/Form";
import { Helmet } from "react-helmet-async";

function Login() {
    return (
      <>
        <Helmet>
          <title>App Ventus - Login</title>
        </Helmet>
        <Form />
      </>
      );
}

export default Login;