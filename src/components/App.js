import '../styles/main.scss';
import React, { useState } from 'react';
import initialData from '../data/clubList.json';

function App() {
  const [data, setData] = useState(initialData);
  const [newClub, setNewClub] = useState({
    name: '',
    openOnWeekdays: false,
    openOnweekend: false,
  });
  const [filter, setFilter] = useState('all');

  const handleNewClub = (ev) => {
    if (ev.currentTarget.id === 'name') {
      setNewClub({
        ...newClub,
        name: ev.currentTarget.value,
      });
    } else if (ev.currentTarget.id === 'week') {
      setNewClub({
        ...newClub,
        openOnWeekdays: ev.currentTarget.checked,
      });
    } else if (ev.currentTarget.id === 'weekend') {
      setNewClub({
        ...newClub,
        openOnWeekend: ev.currentTarget.checked,
      });
    }
  };

  const handleFilter = (ev) => {
    setFilter(ev.currentTarget.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setData([...data, newClub]);

    setNewClub({
      name: '',
      openOnWeekdays: false,
      openOnweekend: false,
    });
  };

  const htmlClubs = () => {
    return data
      .filter((club) => {
        if (filter === 'openOnWeekdays') {
          return club.openOnWeekdays === true;
        } else if (filter === 'openOnWeekend') {
          return club.openOnWeekdend === true;
        }
        return true;
      })

      .map((club, index) => {
        return (
          <li key={index} className="club_conatiner">
            <p>
              #{index}:{club.name}
            </p>
            <p>
              {club.openOnWeekdays === true
                ? 'Abierto entre semana: Sí'
                : 'Abierto entre semana : No'}
            </p>

            <p>
              {club.openOnWeekend === true
                ? 'Abierto el fin de semana: Sí'
                : 'Abierto el fin de semana : No'}
            </p>
          </li>
        );
      });
  };

  return (
    <div>
      <header className="main_conatiner">
        <h1 className="club_name">Mis clubs</h1>
        <form className="club_search">
          <label htmlFor="search">Mostrar</label>
          <select value={filter} id="filter" onChange={handleFilter}>
            <option value="all">Todos</option>
            <option value="openOnWeekdays">los que abren entre semana</option>
            <option value="openOnWeekend">
              los que abren el fin de semana
            </option>
          </select>
        </form>
      </header>
      <main>
        <ul className="club_container-main">{htmlClubs()}</ul>
        <form className="new_club-container">
          <h2 className="new_club-text">Añadir un nuevo club</h2>
          <label className="new_club-name" htmlFor="name">
            Nombre del club
          </label>
          <input
            className="new_club-input"
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
            className="new_club-btn"
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
