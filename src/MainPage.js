import './MainPage.js';
import {Link} from "react-router-dom";
import React, {useState} from "react";


const grid1 = [
    {
        id: 1,
        gridid: 'item-0',
        imgSrc: 'https://ir.ozone.ru/s3/multimedia-6/wc1000/6837031398.jpg',
        text: 'Фигурка Funko POP! Harry Potter Chamber of Secrets 20th Hermione Granger',
        price: 2469,
    },
    {
        id: 2,
        gridid: 'item-1',
        imgSrc: 'https://ir.ozone.ru/s3/multimedia-5/wc1000/6836833865.jpg',
        text: 'LOreal Paris Антивозрастной набор Revitalift с про-ретинолом: дневной и ночной крем для лица',
        price: 1049,
    },
    {
        id: 3,
        gridid: 'item-2',
        imgSrc: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6835663450.jpg',
        text: 'Игрушка яйцо-сюрприз ZURU RAINBOCORNS Big Hair Surprise',
        price: 2349,
    }
];

const grid2 = [
    {
        id: 4,
        gridid: 'item-0',
        imgSrc: 'https://ir.ozone.ru/s3/multimedia-b/wc1000/6836522039.jpg',
        text: 'Набор кухонных ножей Tefal "Essential" из 3 предметов',
        price: 1249
    },
    {
        id: 5,
        gridid: 'item-1',
        imgSrc: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6837146829.jpg',
        text: 'SILVERME Моносерьга серебро 925',
        price: 429
    },
    {
        id: 6,
        gridid: 'item-2',
        imgSrc: 'https://ir.ozone.ru/s3/multimedia-z/wc1000/6837146483.jpg',
        text: 'Мастер и Маргарита | Булгаков Михаил Афанасьевич',
        price: 389
    }
];

const MainPage = () => (
    <>
        <div className="grid-container">
            {grid1.map(item => (
                <div key={`grid1-${item.id -1}`} className="grid-item">
                    <img src={item.imgSrc} alt={`Item ${item.id - 1}`} />
                    <p>{item.text}</p>
                    <p>{item.price} р.</p>
                    <Link to={`/product/${item.id - 1}`}>
                        <button>Подробнее</button>
                    </Link>
                </div>
            ))}
        </div>
        <div className="grid-container">
            {grid2.map(item => (
                <div key={`grid2-${item.id - 1}`} className="grid-item">
                    <img src={item.imgSrc} alt={`Item ${item.id - 1}`} />
                    <p>{item.text}</p>
                    <p>{item.price} р.</p>
                    <Link to={`/product/${item.id - 1}`}>
                        <button>Подробнее</button>
                    </Link>
                </div>
            ))}
        </div>
    </>
);

export default MainPage;