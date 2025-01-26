import React from 'react';

function Skills() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>

      {/* MLOps Skills */}
      <div className="mb-8 hover-container">
        <h3 className="text-xl font-semibold text-white mb-4 text-center">⚙️ MLOps</h3>
        <div className="text-gray-300 hover:text-[#65fefc] transition-colors inline-flex items-center space-x-4 button-hover text-center cursor-pointer shadow-lg">
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/mlflow-%23d9ead3.svg?style=for-the-badge&logo=numpy&logoColor=blue" alt="MLflow" />
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/Apache%20Airflow-017CEE?style=for-the-badge&logo=Apache%20Airflow&logoColor=white" alt="Apache Airflow" />
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/DVC-%235664FF.svg?style=for-the-badge&logo=dataversioncontrol&logoColor=white" alt="DVC" />
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/Grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white" alt="Grafana" />
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
        </div>
      </div>

      {/* AI/ML Skills */}
      <div className="mb-8 hover-container">
        <h3 className="text-xl font-semibold text-white mb-4 text-center">🧠 AI/ML</h3>
        <div className="text-gray-300 hover:text-[#65fefc] transition-colors inline-flex items-center space-x-4 button-hover text-center cursor-pointer shadow-lg">
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white" alt="TensorFlow" />
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white" alt="PyTorch" />
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-learn" />
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/Hugging%20Face-%23FFDFD4.svg?style=for-the-badge&logo=huggingface&logoColor=black" alt="Hugging Face" />
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/OpenCV-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV" />
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/Streamlit-%23FE4B4B.svg?style=for-the-badge&logo=streamlit&logoColor=white" alt="Streamlit" />
        </div>
      </div>

      {/* Programming Skills */}
<div className="mb-8 hover-container">
  <h3 className="text-xl font-semibold text-white mb-4 text-center">💻 Programming</h3>
  <div className="text-gray-300 hover:text-[#65fefc] transition-colors flex flex-wrap justify-center space-x-4 button-hover text-center cursor-pointer shadow-lg">
    <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
    <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/SQL-%2300758F.svg?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQL" />
    <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/Solidity-%2300C7B7.svg?style=for-the-badge&logo=solidity&logoColor=white" alt="Solidity" />
    <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/Flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />
  </div>
</div>

{/* Data Skills */}
<div className="mb-8 hover-container">
  <h3 className="text-xl font-semibold text-white mb-4 text-center">📊 Data</h3>
  <div className="text-gray-300 hover:text-[#65fefc] transition-colors flex flex-wrap justify-center space-x-4 button-hover text-center cursor-pointer shadow-lg">
    <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/Pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" />
    <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/NumPy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy" />
    <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/Postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
    <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/MongoDB-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  </div>
</div>


      {/* Other Tools */}
      <div className="mb-8 hover-container">
        <h3 className="text-xl font-semibold text-white mb-4 text-center">🛠️ Other Tools</h3>
        <div className="text-gray-300 hover:text-[#65fefc] transition-colors inline-flex items-center space-x-4 button-hover text-center cursor-pointer shadow-lg">
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/Git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/GitHub%20Actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions" />
          <img className="transform hover:scale-110 transition-transform duration-300" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
        </div>
      </div>
    </div>
  );
}

export default Skills;