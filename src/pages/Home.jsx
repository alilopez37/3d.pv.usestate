import { useState } from "react";
import { Helmet } from "react-helmet-async";

function Home() {
  const [data, setData] = useState([]);


  const handleClick = (event) => {
    fetch('https://rickandmortyapi.com/api/character')
    .then (response => {
      if (response.ok)
        return response.json()
      else
        alert('Ocurrio un error')
    })
    .then (data => {
      setData(data.results)
    })
    .catch (error => {})
  };

  return (
    <>
      <Helmet>
        <title>App Ventus - Home</title>
      </Helmet>

      <button onClick={handleClick}>Cargar datos de Rick & Morty</button>
      <ul>
        {
          data.map(character => <li>{character.name}</li>)
        }
      </ul>
    </>
  );
}

export default Home;
