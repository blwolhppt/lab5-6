import React from "react";
import {useParams} from "react-router-dom";
import "./App.css";

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

const About = () => {
  const { studentId } = useParams();
  const student = initialData[studentId];


  return (
    <>
      <div className="product-container">
        <div className="product-details">
            <h3>Фамилия: {student.surname}</h3>
            <h3>Имя: {student.name}</h3>
            <p></p>
            <p1>Группа: {student.group}</p1>
            <p></p>
            <p1>Почта: {student.email}</p1>
        </div>
      </div>
    </>
  );
};

export default About;