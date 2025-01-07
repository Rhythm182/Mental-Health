import React from 'react'
import surveyCard from "../assets/images/survey.png";
import chatbotCard from "../assets/images/chatbot.png";
import suggestionsCard from "../assets/images/suggestions.png";

const CardDisplay = () => {
  return(
    <div className='flex justify-center gap-4'>
        <div className='w-80 p-10 bg-white rounded-lg mx-auto flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>  
            <img src={surveyCard} alt="Survey card pic" className='w-1/2 rounded-full h-auto' />
            <h1 className='text-lg font-bold text-dark-blue'>Mood Tracker</h1>
            <p className='text-xs font-semibold text-dark-green text-center my-3'>Our Mood Tracker survey helps you rate your daily emotions (1-10) to track your mood. View your emotional trends in a graph on your dashboard.</p>
      </div>

      <div className='w-80 p-10 bg-white rounded-lg mx-auto flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>  
        <img src={chatbotCard} alt="Survey card pic" className='w-1/2 rounded-full h-auto' />
        <h1 className='text-lg font-bold text-dark-blue'>Support Circle</h1>
        <p className='text-xs font-semibold text-dark-green text-center my-3'>Support Circle connects you to an AI-powered chat desgined to provide emotional support and meaninfgul conversations. Share your thoughts in a safe space.</p>
      </div>

      <div className='w-80 p-10 bg-white rounded-lg mx-auto flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>  
        <img src={suggestionsCard} alt="Survey card pic" className='w-1/2 rounded-full h-20' />
        <h1 className='text-lg font-bold text-dark-blue'>Wellness Tips</h1>
        <p className='text-xs font-semibold text-dark-green text-center my-3'>Wellness Tips offers daily suggestions to improve your mental health and well-being. From mindfulness exercises to self-care strategies, we're here for you.</p>
      </div>
    
    </div>
    
  )
}

export default CardDisplay
