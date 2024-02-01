import React, { useState, useEffect } from 'react';
import './App.css';

const NamesList = () => {
  const [names, setNames] = useState(() => {
    const storedNames = localStorage.getItem('names');
    return storedNames ? JSON.parse(storedNames) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const forbiddenNames = ['Aza','AZA','AZAT', 'Azat', 'Азат', 'Аза','АЗАТ','АЗА'];

  useEffect(() => {
    localStorage.setItem('names', JSON.stringify(names));
  }, [names]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddName = () => {
    const newName = inputValue.trim();
    if (newName !== '') {
      if (!forbiddenNames.includes(newName)) {
        setNames([...names, newName]);
        setInputValue('');
      } else {
        alert('Азат всегда лучший, ты сам ЧЕРТ😈');
      }
    } else {
      alert('Напиши имя за*бал');
    }
  };

  const handleDeleteName = (index) => {
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
  };

  const handleClearAll = () => {
    setNames([]);
  };

  return (
    <div className="names-list">
      <h2>Список имён</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите имя"
      />
      <button onClick={handleAddName}>Добавить</button>
      <button onClick={handleClearAll}>Очистить</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name} - ЧЕРТ😈
            <button className="delete-button" onClick={() => handleDeleteName(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NamesList;
