import React from 'react';
import CardDisplay from '../Components/CardDisplay';

export default function Home() {
  return (
    <div className="absolute bg-gradient-to-r from-cream to-white inset-0 flex flex-col overflow-x-hidden">  {/*find out why min-h-screen is not showing the left side of the screen, oiriginally had absolute}
      {/* Header Section */}
        <div className="absolute top-0 left-0 m-4 p-4 text-lg font-bold text-dark-blue">
          MindMate
        </div>

        {/*Menu*/}
        <div className='absolute top-0 right-0 m-4 flex items-center space-x-4'>
            <a
                href = "#how-it-works"
                className='text-light-purple hover:text-dark-purple text-lg cursor-pointer'
            >
                How It Works  {/*Link */}
            </a>
            <a
                href = "#About Us"
                className='text-light-purple hover:text-dark-purple text-lg cursor-pointer'
            >
                About Us  {/*Link */}
            </a>
            <button className='p-2 w-32 text-lg bg-transparent border-light-purple hover:text-dark-purple text-light-purple rounded-full'>
            Sign Up
            </button>
        </div>

        {/*Main Content Container */}
        <div className="flex flex-col items-center pt-32">
        {/* Welcome Text Section */}
        <div className="text-center mb-16">
          <h1 className='text-6xl text-center font-bold text-dark-blue mb-6'>
            Welcome to MindMate!
          </h1>
          <p className='text-lg max-w-[600px] text-dark-purple mb-6'>
            Your AI-powered mental health companion, here to support mindfulness, track progress, and guide you through life's challenges.
          </p>
          <button className='p-2 w-32 text-lg bg-light-purple border-0 hover:bg-dark-purple text-white rounded-full'>
            Try Now
          </button>
        </div>

        {/* Card Slider Section */}
        <div className='max-w-5xl mt-8'>  {/* w-full mt-8 */}
          <CardDisplay />
        </div>
      </div>
    </div>
  );
}
