import { useState } from "react";
import { Helmet } from "react-helmet-async";

function Home() {
  const [data, setData] = useState({ id: 1, name: "ali", lastName: "lopez" });

  const handleClick = (event) => {
    setData({...data, lastName:'zunun'});
  };

  return (
    <>
      <p>{data.lastName}</p>
      <button onClick={handleClick}>Actualizar</button>
    </>
  );
}

export default Home;
