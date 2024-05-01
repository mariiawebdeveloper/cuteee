import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Cute from './сute.gif';
import backgroundImage from './back.webp'; // Импортируйте ваше фоновое изображение

const App = () => {
    const [buttonPosition, setButtonPosition] = useState({
        top: '50%',
        left: '40%',
    });
    const [, setAttempts] = useState(0); // Состояние для отслеживания количества попыток
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

        // Устанавливаем положение кнопки, избегая выхода за пределы экрана
        const top = randomTop >= 0 ? randomTop : 0;
        const left = randomLeft >= 0 ? randomLeft : 0;

        return {
            top: `${top}px`,
            left: `${left}px`,
        };
    };

    // Функция, вызываемая при наведении на кнопку "Да"
    const handleMouseOverYes = () => {
        // Увеличиваем количество попыток
        setAttempts((prevAttempts) => {
            const newAttempts = prevAttempts + 1;

            // Если количество попыток достигает 10, показываем финальное сообщение
            if (newAttempts >= 10) {
                setShowFinalMessage(true);
                return prevAttempts; // Останавливаем дальнейшее увеличение счетчика
            }

            const newPosition = getRandomPosition();
            setButtonPosition(newPosition);
            return newAttempts; // Возвращаем обновленное количество попыток
        });
    };

    // Функция, вызываемая при нажатии на кнопку "Нет"
    const handleNoClick = () => {
        setShowFinalMessage(true); // Показываем финальное сообщение
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
                alt="Описание GIF"
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
                    top: '40%', // Выравниваем по вертикали
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#000', // Цвет текста
                    backgroundColor: '#FFD1DC', // Нежнорозовый цвет подложки
                    padding: '5px', // Добавляем отступы вокруг текста
                    borderRadius: '5px', // Скругленные углы
                }}
            >
                Грустишь?
            </div>
            {/* Кнопка "Да" */}
            <button
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: buttonPosition.left,
                    width: '100px',
                    height: '40px',
                    backgroundColor: 'lightblue', // Цвет фона кнопки "Да"
                    color: '#000',
                }}
                onMouseOver={handleMouseOverYes}
            >
                Да
            </button>
            {/* Кнопка "Нет" */}
            <button
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '60%', // Позиция слева (примерно на одном уровне с кнопкой "Да")
                    width: '100px',
                    height: '40px',
                    backgroundColor: 'lightcoral', // Цвет фона кнопки "Нет"
                    color: '#FFF',
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
                        top: '55%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#FFF',
                        backgroundColor: 'rgba(255, 182, 193, 0.7)', // Полупрозрачная нежнорозовая подложка
                        padding: '10px', // Отступы
                        borderRadius: '5px', // Скругленные углы
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
