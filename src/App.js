import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Cute from './сute.gif';
import backgroundImage from './back.webp'; // Импортируйте ваше фоновое изображение

const App = () => {
    const [buttonPosition, setButtonPosition] = useState({
        top: '50%',
        left: '40%',
    });
    const [showFinalMessage, setShowFinalMessage] = useState(false); // Состояние для отображения финального сообщения

    // Функция для генерации случайного положения кнопки
    const getRandomPosition = () => {
        // Получаем размеры окна
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Получаем размеры кнопки
        const buttonWidth = 100; // укажите ширину кнопки
        const buttonHeight = 40; // укажите высоту кнопки

        // Генерируем случайные координаты, учитывая размеры кнопки и окна
        const randomTop = Math.random() * (windowHeight - buttonHeight);
        const randomLeft = Math.random() * (windowWidth - buttonWidth);

        return {
            top: `${randomTop}px`,
            left: `${randomLeft}px`,
        };
    };

    // Функция, вызываемая при нажатии на кнопку "Да"
    const handleYesClick = () => {
        // Перемещаем кнопку на случайное место
        const newPosition = getRandomPosition();
        setButtonPosition(newPosition);
    };

    // Функция, вызываемая при нажатии на кнопку "Нет"
    const handleNoClick = () => {
        // Показываем финальное сообщение
        setShowFinalMessage(true);
    };

    return (
        <div
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(${backgroundImage})`, // Фоновое изображение
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            {/* Отображение Cute GIF сверху */}
            <img
                src={Cute}
                alt="Cute GIF"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            />
            {/* Сообщение "Грустишь?" */}
            <div
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#000', // Цвет текста
                    backgroundColor: '#FFD1DC', // Нежнорозовый цвет подложки
                    padding: '10px',
                    borderRadius: '5px',
                }}
            >
                Грустишь?
            </div>
            {/* Кнопка "Да" */}
            <button
                style={{
                    position: 'absolute',
                    top: buttonPosition.top,
                    left: buttonPosition.left,
                    width: '100px',
                    height: '40px',
                    backgroundColor: 'lightblue',
                    color: '#FFF',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={handleYesClick} // Обработчик события onClick
            >
                Дя((
            </button>
            {/* Кнопка "Нет" */}
            <button
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '60%',
                    width: '100px',
                    height: '40px',
                    backgroundColor: 'lightcoral',
                    color: '#FFF',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={handleNoClick}
            >
                Нет
            </button>
            {/* Сообщение "Вот видишь, все хорошо, ты не грустишь <3" */}
            {showFinalMessage && (
                <div
                    style={{
                        position: 'absolute',
                        top: '60%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(255, 182, 193, 0.7)',
                        padding: '10px',
                        borderRadius: '5px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#FFF',
                    }}
                >
                    Вот видишь, все хорошо, ты не грустишь &#60;3
                    ЛЮБЛЮ ТЕБЯ!!!
                </div>
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
