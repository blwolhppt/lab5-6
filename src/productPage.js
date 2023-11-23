import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useCart} from "./CartContext";
import "./App.css";

const dataArray = [
    {
        id: 1,
        imgSrc: 'https://ir.ozone.ru/s3/multimedia-6/wc1000/6837031398.jpg',
        name: 'Фигурка Funko POP! Harry Potter Chamber of Secrets 20th Hermione Granger',
        description: 'Фигурка Funko POP! Harry Potter Chamber of Secrets 20th Hermione Granger (150) 65653 по мотивам франшизы "Гарри Поттер". \n' +
            'Упаковка: картонный бокс \n' +
            'Размеры бокса: 11.5 х 9 х 16 см \n' +
            'Материал: винил \n' +
            'официально лицензированный продукт \n' +
            'Разработчик/Издатель: Funko',
        price: 2469
    },
    {
        id: 2,
        imgSrc: 'https://ir.ozone.ru/s3/multimedia-5/wc1000/6836833865.jpg',
        name: 'LOreal Paris Антивозрастной набор Revitalift с про-ретинолом: дневной и ночной крем для лица',
        description: 'Антивозрастной набор Revitalift – это эффективная рутина ухода за кожей на каждый день. Набор включает полноразмерные дневной и ночной крем, которые благодаря про-ретинолу в составе повышают упругость кожи и подтягивают овал лица.',
        price: 1049
    },
    {
        id: 3,
        imgSrc: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6835663450.jpg',
        name: 'Игрушка яйцо-сюрприз ZURU RAINBOCORNS Big Hair Surprise',
        description: 'Удивительно волшебные Rainbocorns Big Hair Surprise ждут вас! Разбейте гигантское двухцветное яйцо, чтобы встретить самых больших Rainbocorns с самыми роскошными волосами! Внутри спрятано более 30 сюрпризов: вы найдёте всё необходимое, чтобы выглядеть так же стильно, как ваш новый друг, в том числе аксессуары для волос, браслеты с шармами и временные татуировки. Открывайте упаковку слой за слоем, находя всё новые сокровища! Кроме того, вы сможете собрать целую коллекцию Boo-Boocorns Big Hair с аксессуарами, которые легко сочетать друг с другом. Вам предстоит встреча с тремя дерзкими подружками: Глэм-Гэм, Пэм-Пуррр и Мо! Какая из них попадётся вам первой? ',
        price: 2349
    },
    {
        id: 4,
        imgSrc: 'https://ir.ozone.ru/s3/multimedia-b/wc1000/6836522039.jpg',
        name: 'Набор кухонных ножей Tefal "Essential" из 3 предметов',
        description: 'Ножи Essential: идеальный стартовые ножи для вышей кухни! Ножи Essential — это полный ассортимент ножей из нержавеющей стали с мягкой эргономичной ручкой для оптимального комфорта и контроля приготовления. Лезвие из высококачественной нержавеющей стали обеспечивает превосходную режущую способность и стойкость. Каждый нож имеет уникальный безопасный дизайн и создан для конкретных видов нарезки. Набор из трех предметов Essential, состоящий из универсального ножа 12 см, идеально подходящего для нарезки как крупных так и тонких кусочков, ножа для овощей 9 см, созданного для простой нарезки любых фруктов и овощей, станет вашим лучшим повседневным помощником на кухне и овощечистка, которая снабжена лезвием из высокопрочной стали, длительное время сохраняющим остроту. Ножи рекомендуется мыть неабразивной губкой и тщательно высушивать.',
        price: 1249
    },
    {
        id: 5,
        imgSrc: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6837146829.jpg',
        name: 'SILVERME Моносерьга серебро 925',
        description: 'одированное серебро - покрытие тонким слоем родия (металл платиновой группы) предохраняет серебряные изделия от почернения и позволяет сохранить блеск. Внешний вид изделий с родированным покрытием отличается более блестящей и белой поверхностью.',
        price: 429
    },
    {
        id: 6,
        imgSrc: 'https://ir.ozone.ru/s3/multimedia-z/wc1000/6837146483.jpg',
        name: 'Мастер и Маргарита | Булгаков Михаил Афанасьевич',
        description: 'Сатана правит бал в сталинской Москве, Маргарита мстит литературным критикам, тьма накрывает ненавидимый прокуратором город. Самый популярный русский роман XX века — это одновременно едкий фельетон о советских обывателях, апокриф о последних днях Христа и история спасительной любви.\n' +
            '\n' +
            '«Главные книги русской литературы» — совместная серия издательства «Альпина.Проза» и интернет-проекта «Полка». Произведения, которые в ней выходят, выбраны современными писателями, критиками, литературоведами, преподавателями. Это и попытка определить, как выглядит сегодня русский литературный канон, и новый взгляд на известные произведения: каждую книгу сопровождает предисловие авторов «Полки».',
        price: 389
    },
];

const ProductPage = () => {
  const { productId } = useParams();
  const product = dataArray[productId];

  const [showDescription, setShowDescription] = useState(false);

  const handleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <div className="product-container">
        <div className="product-details">
          <h1>{product.name}</h1>
          <img src={product.imgSrc} alt={product.name} />
          <div className="button-container">
            <Link to={`/cart`} className="cart-link">
              <button className="cart-button">В корзину</button>
            </Link>
          </div>
          <button onClick={handleShowDescription} className="description-btn">
            {showDescription ? "Скрыть" : "Подробнее"}
          </button>
          {showDescription && <p className="product-description">{product.description}</p>}
        </div>
      </div>
    </>
  );
};

export default ProductPage;