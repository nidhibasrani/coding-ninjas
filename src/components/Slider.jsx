import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // You can choose the default or custom theme

const CardSlider = () => {
    const cards = [
        { id: 1, image: '/microsoft.png', avatar: 'https://i.pravatar.cc/50', content: 'This is the first card.' },
        { id: 2, image: '/microsoft.png', avatar: 'https://i.pravatar.cc/50', content: 'This is the second card.' },
        { id: 3, image: '/microsoft.png', avatar: 'https://i.pravatar.cc/50', content: 'This is the third card.' },
        { id: 4, image: '/microsoft.png', avatar: 'https://i.pravatar.cc/50', content: 'This is the fourth card.' },
        { id: 5, image: '/microsoft.png', avatar: 'https://i.pravatar.cc/50', content: 'This is the fifth card.' },
        { id: 6, image: '/microsoft.png', avatar: 'https://i.pravatar.cc/50', content: 'This is the sixth card.' },
    ];

    return (
        <div className="max-w-4xl mx-auto my-8">
            <Splide
                options={{
                    type: 'loop', // Infinite loop
                    perPage: 3, // Show 3 cards per page
                    gap: '1rem', // Space between cards
                    autoplay: true, // Auto transition
                    interval: 3000, // Auto slide every 3 seconds
                    pagination: false, // Disable pagination
                    arrows: true, // Enable navigation arrows
                    breakpoints: {
                        768: {
                            perPage: 1, // 1 card per page on smaller screens
                        },
                    },
                }}
            >
                {cards.map((card) => (
                    <SplideSlide key={card.id}>
                        <div className="flex flex-col border justify-center items-center gap-3 p-4 bg-white rounded-lg shadow-md">
                            <img src={card.avatar} alt="Avatar" className="rounded-full w-16 h-16" />
                            <img src={card.image} alt="Card" className="w-20 h-20" />
                            <div className="text-center text-gray-700 text-sm">
                                <h3>{card.content}</h3>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default CardSlider;

