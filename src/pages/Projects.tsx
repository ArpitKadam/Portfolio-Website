import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Insurance-Fraud-Detection */}
        <div className="bg-[#144552] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">Insurance Fraud Detection</h3>
          <p className="text-gray-300 mb-4">
            This project implements a sophisticated machine learning model for detecting automobile insurance fraud. By leveraging modern tools and technologies including Dagshub, DVC, Docker, and AWS, I have created a robust pipeline for data processing, model training, and deployment.
          </p>
          <div className="mb-4">
            <span className="text-sm font-medium text-[#65fefc]">Technologies:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Python</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Flask</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Docker</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">AWS</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">DVC</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Dagshub</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">PostgreSQL</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Pandas</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">NumPy</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Matplotlib</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Scikit-Learn</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/ArpitKadam/Insurance-Fraud-Detection" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
            <a href="https://insurance-fraud-detection-1.onrender.com/" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
            <a href="https://snapshots.raintank.io/dashboard/snapshot/z2B1dywVJmx9zMP5Ah0tm3mV2MletB0x?orgId=0" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <ExternalLink className="w-4 h-4 mr-1" /> Dashboard
            </a>
          </div>
        </div>
        
        {/* JARVIS-AI-with-OpenAI */}
        <div className="bg-[#144552] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">JARVIS-AI-with-OpenAI</h3>
          <p className="text-gray-300 mb-4">
            Developed a sophisticated AI assistant using OpenAI's GPT-3 to handle multiple tasks like scheduling, answering questions, and automating workflows.
          </p>
          <div className="mb-4">
  <span className="text-sm font-medium text-[#65fefc]">Technologies:</span>
  <div className="flex flex-wrap gap-2 mt-2">
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">OpenAI GPT-3</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Python</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Speech Recognition</span>
  </div>
</div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/ArpitKadam/AI-Virtual-Projects" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
            <a href="https://github.com/ArpitKadam/AI-Virtual-Projects" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
          </div>
        </div>

        {/* MLproject on student performance predictor */}
        <div className="bg-[#144552] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">MLproject on Student Performance Predictor</h3>
          <p className="text-gray-300 mb-4">
            Built a machine learning model to predict student performance based on various features like study habits, attendance, and socioeconomic status.
          </p>
          <div className="mb-4">
            <span className="text-sm font-medium text-[#65fefc]">Technologies:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Python</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Flask</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Docker</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">AWS</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">DVC</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Dagshub</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">PostgreSQL</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Pandas</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">NumPy</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Matplotlib</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Scikit-Learn</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/ArpitKadam/mlproject" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
            <a href="https://mlproject-kyw0.onrender.com/" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
          </div>
        </div>

        {/* text2text-generator-with-HuggingFace-Model */}
<div className="bg-[#144552] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
  <h3 className="text-xl font-semibold mb-2 text-white">Text2Text Generator with HuggingFace Model</h3>
  <p className="text-gray-300 mb-4">
    This project demonstrates a text-to-text generation application using FastAPI, Docker, and Hugging Face. The deployed application is live and uses the google/flan-t5-small model for text generation.
  </p>
  <div className="mb-4">
            <span className="text-sm font-medium text-[#65fefc]">Technologies:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">HuggingFace</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">torch</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">FastAPI</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Uvicorn</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Transformers</span>
            </div>
          </div>
  <div className="flex items-center space-x-4">
    <a
      href="https://github.com/ArpitKadam/text2text-generator-with-HuggingFace-Model"
      className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1"
    >
      <Github className="w-4 h-4 mr-1" /> Code
    </a>
    <a
      href="https://arpitkadam-text2text-generator-with-docker-and-h-582ac6f.hf.space/"
      className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1"
    >
      <ExternalLink className="w-4 h-4 mr-1" /> Demo
    </a>
  </div>
</div>

        {/* Data-science-project-on-Wine-Quality */}
        <div className="bg-[#144552] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">Data Science Project on Wine Quality</h3>
          <p className="text-gray-300 mb-4">
            Analyzed wine quality based on various physicochemical properties and developed a model to predict wine quality scores.
          </p>
          <div className="mb-4">
            <span className="text-sm font-medium text-[#65fefc]">Technologies:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Python</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Flask</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Docker</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">AWS</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">DVC</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Dagshub</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">PostgreSQL</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Pandas</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">NumPy</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Matplotlib</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Scikit-Learn</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/ArpitKadam/data-science-project-on-Wine-Quality" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
            <a href="https://data-science-project-7rcg.onrender.com/" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
          </div>
        </div>

        {/* Network_Security project on phishing data */}
        <div className="bg-[#144552] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">Network Security Project on Phishing Data</h3>
          <p className="text-gray-300 mb-4">
            Developed a model to detect phishing websites based on features like URL length, domain age, and the use of HTTPS.
          </p>
          <div className="mb-4">
	    <span className="text-sm font-medium text-[#65fefc]">Technologies:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Python</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Flask</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Docker</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">AWS</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">DVC</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Dagshub</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">PostgreSQL</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Pandas</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">NumPy</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Matplotlib</span>
      <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Scikit-Learn</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/ArpitKadam/Network_Security" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
            <a href="https://github.com/ArpitKadam/Network_Security" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
          </div>
        </div>

        {/* Facial Recognition with Real-Time Database */}
        <div className="bg-[#144552] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">Facial Recognition with Real-Time Database</h3>
          <p className="text-gray-300 mb-4">
            Built a facial recognition system that recognizes and authenticates users in real-time with a connected database for user management.
          </p>
          <div className="mb-4">
	    <span className="text-sm font-medium text-[#65fefc]">Technologies:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Opencv-Python</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Face-Recognition</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Numpy</span>
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Python</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Cvzone</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Firebase-Admin</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/ArpitKadam/Facial-Recognition-with-Realtime-Database" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
            <a href="https://github.com/ArpitKadam/Facial-Recognition-with-Realtime-Database" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
          </div>
        </div>

        {/* AI-Virtual-Projects */}
        <div className="bg-[#144552] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">AI-Virtual-Projects</h3>
          <p className="text-gray-300 mb-4">
            Welcome to the AI Virtual Projects repository! This collection features interactive and fun virtual applications built with Python. Stay tuned as more exciting projects will be added soon! ✨
          </p>
          <div className="mb-4">
	    <span className="text-sm font-medium text-[#65fefc]">Technologies:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Opencv-Python</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Numpy</span>
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Python</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Cvzone</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/ArpitKadam/AI-Virtual-Projects" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
            <a href="https://github.com/ArpitKadam/AI-Virtual-Projects" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
          </div>
        </div>

        {/* Graphana-visualization-banking-project */}
        <div className="bg-[#144552] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">Graphana Visualization Banking Project</h3>
          <p className="text-gray-300 mb-4">
            Built a real-time data visualization dashboard using Graphana to monitor banking transactions and customer data.
          </p>
          <div className="mb-4">
	    <span className="text-sm font-medium text-[#65fefc]">Technologies:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">RDS</span>
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Graphana</span>
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Python</span>
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Postgres</span>
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Pandas</span>
              <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">DBeaver</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/ArpitKadam/graphana-visualization-banking-project" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
            <a href="https://github.com/ArpitKadam/graphana-visualization-banking-project" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
          </div>
        </div>

        {/* My Python Package */}
        <div className="bg-[#144552] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">My Python Package</h3>
          <p className="text-gray-300 mb-4">
            Welcome to the Math Operations Package, a simple and versatile Python library for performing essential mathematical operations! This package is designed to make arithmetic calculations and other math-related functionalities very easy.
          </p>
          <div className="mb-4">
  <span className="text-sm font-medium text-[#65fefc]">Technologies:</span>
  <div className="flex flex-wrap gap-2 mt-2">
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Pytest</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Python</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Pandas</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Numpy</span>
  </div>
</div>

          <div className="flex items-center space-x-4">
            <a href="https://github.com/ArpitKadam/my-python-package" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
            <a href="https://github.com/ArpitKadam/my-python-package" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
          </div>
        </div>

        {/* Car Price Prediction using Machine Learning */}
        <div className="bg-[#144552] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">Car Price Prediction</h3>
          <p className="text-gray-300 mb-4">
            This Car Price Prediction app uses machine learning to estimate car prices based on features like model, year, mileage, and engine size, providing accurate price predictions through a user-friendly Streamlit interface.
          </p>
          <div className="mb-4">
  <span className="text-sm font-medium text-[#65fefc]">Technologies:</span>
  <div className="flex flex-wrap gap-2 mt-2">
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Streamlit</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Pandas</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Numpy</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Scikit-Learn</span>
  </div>
</div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/ArpitKadam/Car-Price-Prediction-using-Machine-Learning" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
            <a href="https://car-price-prediction-using-machine.onrender.com/" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
          </div>
        </div>

        {/* Breast Cancer Prediction */}
        <div className="bg-[#144552] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">Breast Cancer Prediction Project</h3>
          <p className="text-gray-300 mb-4">
            This project aims to predict breast cancer using various machine learning algorithms. The goal is to improve the accuracy of early detection by selecting and evaluating different models on a dataset of breast cancer cases.
          </p>
          <div className="mb-4">
  <span className="text-sm font-medium text-[#65fefc]">Technologies:</span>
  <div className="flex flex-wrap gap-2 mt-2">
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Streamlit</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Pandas</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Numpy</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Scikit-Learn</span>
  </div>
</div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/ArpitKadam/Breast-Cancer-Prediction-using-different-Machine-Learning-Algorithms" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
            <a href="https://breast-cancer-prediction-using-git-5060bb-arpitkadams-projects.vercel.app/" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
          </div>
        </div>

        {/* Software Developer Salary Prediction App */}
        <div className="bg-[#144552] rounded-lg p-6 border border-[#006466]/20 hover:border-[#65fefc] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">Software Developer Salary Prediction App</h3>
          <p className="text-gray-300 mb-4">
            Developed a machine learning model to predict software developer salaries based on factors like experience, skills, and location, providing valuable insights for job seekers and employers in the tech industry.
          </p>
          <div className="mb-4">
  <span className="text-sm font-medium text-[#65fefc]">Technologies:</span>
  <div className="flex flex-wrap gap-2 mt-2">
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Streamlit</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Pandas</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Numpy</span>
    <span className="px-2 py-1 bg-[#0b525b] text-[#65fefc] text-sm rounded hover:bg-[#006466] transition-colors duration-300">Scikit-Learn</span>
  </div>
</div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/ArpitKadam/Software-Developer-Salary-Prediction-using-Machine-Learning" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
            <a href="https://software-developer-salary-prediction.onrender.com" 
               className="text-[#65fefc] hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1">
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;