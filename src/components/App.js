import "../styles/main.scss";
import React, { useState } from "react";
import initialData from "../data/clubList.json";

function App() {
  const [data, setData] = useState(initialData);
  const [newClub, setNewClub] = useState({
    name: "",
    openOnWeekdays: "",
    openOnweekend: "",
  });

  const htmlClubs = () => {
    return data.map((club, index) => {
      return (
        <li key={index}>
          <p>
            #{index}:{club.name}
          </p>
          <p>
            {club.openOnWeekdays === true
              ? "Abierto entre semana: Sí"
              : "Abierto entre semana : No"}
          </p>

          <p>
            {club.openOnWeekend === true
              ? "Abierto el fin de semana: Sí"
              : "Abierto el fin de semana : No"}
          </p>
        </li>
      );
    });
  };

  return (
    <div>
      <header>
        <h1>Mis clubs</h1>
      </header>
      <main>
        <ul>{htmlClubs()}</ul>
        <form>
          <h2>Añadir un nuevo club</h2>
          <label htmlFor="name">Nombre del club</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="week">¿Abre entre semana?</label>
          <input id="week" type="checkbox" name="openOption" />
          <label htmlFor="weekend">¿Abre los fines de semana?</label>
          <input id="weekend" type="checkbox" name="openOption" />
          <input type="buton" value="Añadir un nuevo club" />
        </form>
      </main>
    </div>
  );
}

export default App;
