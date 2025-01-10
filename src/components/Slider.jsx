import React, { useState } from 'react';

const CardSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { id: 1, image: '/microsoft.png', avatar: 'https://i.pravatar.cc/50', content: 'This is the first card.' },
        { id: 2, image: '/microsoft.png', avatar: 'https://i.pravatar.cc/50', content: 'This is the second card.' },
        { id: 3, image: '/microsoft.png', avatar: 'https://i.pravatar.cc/50', content: 'This is the third card.' },
        { id: 4, image: '/microsoft.png', avatar: 'https://i.pravatar.cc/50', content: 'This is the fourth card.' },
        { id: 5, image: '/microsoft.png', avatar: 'https://i.pravatar.cc/50', content: 'This is the fifth card.' },
        { id: 6, image: '/microsoft.png', avatar: 'https://i.pravatar.cc/50', content: 'This is the sixth card.' },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const CardComponent = ({ avatar, image, content }) => (
        <div className="flex flex-col border justify-center items-center gap-3 p-4 bg-white rounded-lg shadow-md">
            <img src={avatar} alt="Avatar" className="rounded-full w-16 h-16" />
            <img src={image} alt="Card" className="w-20 h-20" />
            <div className="text-center text-gray-700 text-sm">
                <h3>{content}</h3>
            </div>
        </div>
    );

    return (
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-lg">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)`, width: `${(cards.length * 100) / 3}%` }}
            >
                {cards.map((card) => (
                    <div key={card.id} className="min-w-1/3 p-2">
                        <CardComponent avatar={card.avatar} image={card.image} content={card.content} />
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
                onClick={prevSlide}
            >
                &#10094;
            </button>
            <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
                onClick={nextSlide}
            >
                &#10095;
            </button>
        </div>
    );
};

export default CardSlider;
