import "../styles/main.scss";
import React, { useState } from "react";
import initialData from "../data/clubList.json";

function App() {
  const [data, setData] = useState(initialData);
  const [newClub, setNewClub] = useState({
    name: "",
    openOnWeekdays: false,
    openOnweekend: false,
  });

  const handleNewClub = (ev) => {
    if (ev.currentTarget.id === "name") {
      setNewClub({
        ...newClub,
        name: ev.currentTarget.value,
      });
    } else if (ev.currentTarget.id === "week") {
      setNewClub({
        ...newClub,
        openOnWeekdays: ev.currentTarget.checked,
      });
    } else if (ev.currentTarget.id === "weekend") {
      setNewClub({
        ...newClub,
        openOnWeekend: ev.currentTarget.checked,
      });
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setData([...data, newClub]);

    setNewClub({
      name: "",
      openOnWeekdays: false,
      openOnweekend: false,
    });
  };

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
        <form>
          <label htmlFor="search">Mostrar</label>
          <select name="selectClub" id="selected">
            <option value=""></option>
            <option value="all">Todos</option>
            <option value="openWeek">los que abren entre semana</option>
            <option value="openWeekend">los que abren el fin de semana</option>
          </select>
        </form>
      </header>
      <main>
        <ul>{htmlClubs()}</ul>
        <form>
          <h2>Añadir un nuevo club</h2>
          <label htmlFor="name">Nombre del club</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleNewClub}
            value={newClub.name}
          />
          <label htmlFor="week">¿Abre entre semana?</label>
          <input
            id="week"
            type="checkbox"
            name="openOption"
            onChange={handleNewClub}
            checked={newClub.openOnWeekdays}
          />
          <label htmlFor="weekend">¿Abre los fines de semana?</label>
          <input
            id="weekend"
            type="checkbox"
            name="openOption"
            onChange={handleNewClub}
            checked={newClub.openOnWeekdend}
          />
          <input
            type="buton"
            value="Añadir un nuevo club"
            onClick={handleSubmit}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
