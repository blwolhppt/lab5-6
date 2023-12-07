import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


const Main = () => {
  const initialData = [
    {
      id: 1,
      surname: 'Петров',
      name: 'Петр',
      group: 'ПИ21-6',
      email: '215791@edu.fa.ru',
    },
    {
      id: 2,
      surname: 'Иванов',
      name: 'Иван',
      group: 'ПИ21-7',
      email: '214891@edu.fa.ru',
    },
    {
      id: 3,
      surname: 'Михайлов',
      name: 'Михаил',
      group: 'ПИ21-1',
      email: '111111@edu.fa.ru',
    },
    {
      id: 4,
      surname: 'Васильев',
      name: 'Василий',
      group: 'ПИ21-6',
      email: '211345@edu.fa.ru',
    },
    {
      id: 5,
      surname: 'Дмитриев',
      name: 'Дмитрий',
      group: 'ПИ21-6',
      email: '219876@edu.fa.ru',
    },
  ];

  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState({
    surname: '',
    name: '',
    group: '',
    email: '',
  });

  const [newEntry, setNewEntry] = useState({
    surname: '',
    name: '',
    group: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const handleAddEntry = () => {
    setData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        ...newEntry,
      },
    ]);
    setNewEntry({
      surname: '',
      name: '',
      group: '',
      email: '',
    });
  };


  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    marginTop: '20px',
  };

  const thStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const applyFilter = () => {
    const filteredData = initialData.filter((item) =>
      Object.keys(filter).every((key) => item[key].toLowerCase().includes(filter[key].toLowerCase()))
    );
    setData(filteredData);
  };

  const resetFilter = () => {
    setFilter({
      surname: '',
      name: '',
      group: '',
      email: '',
    });
    setData(initialData);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <h1>Список студентов</h1>
      <div>
        <label>
          Фамилия:
          <input type="text" name="surname" value={filter.surname} onChange={handleFilterChange} />
        </label>
        <label>
          Группа:
          <input type="text" name="group" value={filter.group} onChange={handleFilterChange} />
        </label>
        <button onClick={applyFilter}>Найти</button>
        <button onClick={resetFilter}>Отменить</button>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Фамилия</th>
            <th style={thStyle}>Имя</th>
            <th style={thStyle}>Группа</th>
            <th style={thStyle}>Почта</th>
            <th style={thStyle}>Действие</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={tdStyle}>{item.id}</td>
              <td style={tdStyle}>{item.surname}</td>
              <td style={tdStyle}>{item.name}</td>
              <td style={tdStyle}>{item.group}</td>
              <td style={tdStyle}>{item.email}</td>
              <td style={tdStyle}>
                <button onClick={() => handleDelete(item.id)}>Удалить</button>
                <Link to={`/student/${item.id - 1}`}>
                        <button>Подробнее</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        <h2>Добавить студента:</h2>
        <form>
          <label>Фамилия:
            <input type="text" name="surname" value={newEntry.surname} onChange={handleInputChange} />
          </label>
          <br />
          <label>Имя:
            <input type="text" name="name" value={newEntry.name} onChange={handleInputChange} />
          </label>
          <br />
          <label>Группа:
            <input type="text" name="group" value={newEntry.group} onChange={handleInputChange} />
          </label>
          <br />
          <label>Почта:
            <input type="text" name="email" value={newEntry.email} onChange={handleInputChange} />
          </label>
          <br />
          <button type="button" onClick={handleAddEntry}>Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default Main;