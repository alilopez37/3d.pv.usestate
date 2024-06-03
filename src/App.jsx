import { HelmetProvider } from "react-helmet-async"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

  return (
    <HelmetProvider>
      <Register /> 
    </HelmetProvider>
  )
}

export default App
