import React from 'react';

function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Work Experience</h2>
      <div className="space-y-8">
        <div className="bg-[#1b3a4b] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold text-white">Student Intern</h3>
          <p className="text-[#65fefc]">Sansach Technologies • Mar 2024 - Apr 2024 (2 months)</p>
          <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
            <li className="hover:text-[#65fefc] transition-colors duration-300">Assisted in data analysis and model development for various Data Science projects</li>
            <li className="hover:text-[#65fefc] transition-colors duration-300">Collaborated on the design and implementation of machine learning solutions</li>
            <li className="hover:text-[#65fefc] transition-colors duration-300">Gained hands-on experience in data preprocessing, feature engineering, and model evaluation</li>
          </ul>
        </div>
        
        <div className="bg-[#1b3a4b] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold text-white">Student Intern</h3>
          <p className="text-[#65fefc]">Acmegrade • Jun 2024 - Aug 2024 (3 months)</p>
          <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
            <li className="hover:text-[#65fefc] transition-colors duration-300">Developed machine learning models to improve data analysis and predictive capabilities</li>
            <li className="hover:text-[#65fefc] transition-colors duration-300">Worked on end-to-end machine learning pipelines including data collection, model training, and evaluation</li>
            <li className="hover:text-[#65fefc] transition-colors duration-300">Assisted in the creation of visualizations and dashboards to present data insights</li>
          </ul>
        </div>

        <div className="bg-[#1b3a4b] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold text-white">Student Intern</h3>
          <p className="text-[#65fefc]">NoviTech R&D Pvt Ltd • Oct 2024 - Nov 2024 (2 months)</p>
          <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
            <li className="hover:text-[#65fefc] transition-colors duration-300">Contributed to AI and machine learning research projects focused on automation and prediction models</li>
            <li className="hover:text-[#65fefc] transition-colors duration-300">Collaborated with senior engineers to optimize algorithms and enhance model accuracy</li>
            <li className="hover:text-[#65fefc] transition-colors duration-300">Participated in the development of real-time AI solutions for complex problem-solving</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;