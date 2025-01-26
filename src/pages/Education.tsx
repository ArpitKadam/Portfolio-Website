import React from 'react';

function Education() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Education & Certifications</h2>
      <div className="space-y-8">
        <div className="bg-[#1b3a4b] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold text-white">B.Tech in Artificial Intelligence and Machine Learning</h3>
          <p className="text-[#65fefc]">Shivajirao S. Jondhale College of Engineering, Mumbai University • 2026 (Expected)</p>
          <p className="text-gray-300 mt-2">Currently in 3rd year of Engineering</p>
          <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
            <li className="hover:text-[#65fefc] transition-colors duration-300">Specialization in AI/ML with a focus on real-world applications</li>
            <li className="hover:text-[#65fefc] transition-colors duration-300">Projects on JARVIS-AI-with-OpenAI, Data-science-project-on-Wine-Quality and many more...</li>
            <li className="hover:text-[#65fefc] transition-colors duration-300">Active participant in hackathons and technical committees</li>
          </ul>
        </div>
        
        <div className="bg-[#1b3a4b] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold text-white">Certifications</h3>
          <ul className="mt-4 text-gray-300 space-y-4">
            <li className="bg-[#144552] p-4 rounded hover:bg-[#0b525b] transition-colors duration-300">
              <h4 className="font-semibold text-[#65fefc]">MLOps Bootcamp</h4>
              <p className="mt-2">Udemy - Training on MLOps concepts and tools to streamline the deployment pipeline for ML models</p>
            </li>
            <li className="bg-[#144552] p-4 rounded hover:bg-[#0b525b] transition-colors duration-300">
              <h4 className="font-semibold text-[#65fefc]">Student Intern</h4>
              <p className="mt-2">Sansach Technologies, Synergy School of Business Skills • Mar 2024 - Apr 2024 (2 months)</p>
              <p className="mt-2">Internship focused on Data Science projects and application development</p>
            </li>
            <li className="bg-[#144552] p-4 rounded hover:bg-[#0b525b] transition-colors duration-300">
              <h4 className="font-semibold text-[#65fefc]">Student Intern</h4>
              <p className="mt-2">Acmegrade • Jun 2024 - Aug 2024 (3 months)</p>
              <p className="mt-2">Gaining hands-on experience in Machine Learning applications and data analysis</p>
            </li>
            <li className="bg-[#144552] p-4 rounded hover:bg-[#0b525b] transition-colors duration-300">
              <h4 className="font-semibold text-[#65fefc]">Student Intern</h4>
              <p className="mt-2">NoviTech R&D Pvt Ltd • Oct 2024 - Nov 2024 (2 months)</p>
              <p className="mt-2">Contributing to research and development in Artificial Intelligence projects</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;