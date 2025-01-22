import React from 'react'
import MockInterview from './MockInterview'

const Mentorshipsessions = () => {
    const cardsData=[{
        image:'./mock-interview.webp',
        title:'Mock Interview',
        paragraph1:'Nail coding assessments and technical challenges',
        paragraph2:' Gain insights into problem-solving and algorithmic thinking'

    },
    {
        image:'./public/Profile-review.webp',
    title:'Profile review',
    paragraph1:'Get your profile & resume reviewed by industry leaders',
    paragraph2:'Focus on different aspects of your job search '},
    {
        image:'./public/Project-guidance.webp',
    title:'Project guidance',
    paragraph1:'Career counselling with industry experts',
    paragraph2:'Get assistance on how to build real time projects '}]
  return (
    <div>
    <h2 className='text-mulish text-black font-bold'>1:1 Mentorship sessions</h2>
    <div className='flex'>
        {cardsData.map((card,index)=>(
            <MockInterview
             key={index}
                image={card.image}
                title={card.title}
paragraph1={card.paragraph1}
paragraph2={card.paragraph2}
             />
        ))}
        </div> 
    </div>
  )
}

export default Mentorshipsessions