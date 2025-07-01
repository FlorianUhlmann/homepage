// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <header className="flex items-center space-x-6 mb-8">
        <img src="https://placehold.co/128x128/60a5fa/white?text=Avatar" alt="avatar" className="w-32 h-32 rounded-full border-4 border-gray-600" />
        <div>
          <h1 className="text-4xl font-bold text-white">Florian Uhlmann</h1>
          <p className="text-lg text-gray-400 flex items-center">
            <a href="https://github.com/FlorianUhlmann" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
              <img src="./github.svg" alt="GitHub" className="h-5 w-6 mr-2 bg-white rounded-full " />
              github.com/FlorianUhlmann
            </a>
          </p>
        </div>
      </header>
      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
        Florian, AI Developer. <br/>
My roots are in medical physics and software engineering.<br/>
I build AI bots that help people reflect on personal topics – 24/7.<br/>
I work with vector databases, LLMs, transcript analysis, and precise prompt engineering.<br/>
<br/><br/>
My focus is on long-term memory in AI agents.<br/>
I develop systems that understand, remember, and support – an extension to a good coach.<br/>
Currently at Cherrish, I am building personalized agents with a memory layer:<br/>
They assist people in relationships, dating, and family life.<br/>
They create spaces for real connection and personal growth.<br/>
<br/><br/>
My goal: to create AI that builds long-term trust and enables personal development.<br/>
I believe people can learn to use bots consciously and with self-awareness – for themselves and their relationships and finally....for us all.<br/><br/>

In the long run, I see huge potential in prevention, mental health, and relational medicine.<br/>

I’m Florian – an AI nerd with a heart for humans.<br/>
Technology that strengthens relationships. AI that listens. For a more human future.🚀
        </p>
      </div>
    </div>
  );
};

export default About;