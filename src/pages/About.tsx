import React from 'react';

function About() {
  return (
    <div className="hover-container max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
      <div className="bg-[#1b3a4b] rounded-lg p-8 border border-[#006466]/20">
        <p className="text-gray-300 mb-6">
          Hi, I’m Arpit Kadam, an AI/ML developer passionate about leveraging cutting-edge technologies to solve real-world problems. With a strong foundation in machine learning, computer vision, and natural language processing, I focus on building scalable, impactful solutions that drive business growth and innovation.
        </p>
        <p className="text-gray-300 mb-6">
          My journey began during my undergrad, where I first fell in love with AI while developing machine learning models for various applications. From there, I’ve honed my skills through hands-on experience and collaboration on projects that focus on creating practical AI systems for fields like healthcare, finance, and robotics.
        </p>
        <p className="text-gray-300 mb-6">
          I’m particularly interested in using AI to address challenges in computer vision and natural language understanding, with a goal to make technology more accessible and ethical. I'm constantly learning and experimenting with new techniques and frameworks such as TensorFlow, PyTorch, and OpenCV to push the boundaries of what’s possible.
        </p>
        <p className="text-gray-300">
          Right now, I’m focused on developing solutions in medical imaging and AI-powered tools that improve lives while ensuring fairness and inclusivity. I believe that AI should not only solve problems but also have a positive impact on society as a whole.
        </p>
      </div>
    </div>
  );
}

export default About;
