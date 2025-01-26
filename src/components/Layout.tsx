import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

function Layout() {
  return (
    <div className="min-h-screen bg-[#272640] flex flex-col">
      <header className="bg-gradient-to-r from-[#312244] to-[#3e1f47] border-b border-[#4d194d]/30">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center mb-8 flex items-center justify-center gap-8">
            <div className="flex-1 text-right">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                ARPIT KADAM
              </h1>
              <p className="mt-3 text-xl text-[#65fefc]">
                Data Analyst and AI/ML Developer
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://i.ibb.co/v1wL48c/Image.jpg"
                alt="Arpit Kadam"
                className="w-32 h-32 rounded-full border-4 border-[#65fefc] shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="flex flex-row justify-center gap-4 mt-6">
            <a
              href="https://i.ibb.co/dGvSXR1/CV-Resume.jpg"
              download="Arpit_Kadam_Resume.jpg"
              className="inline-flex items-center px-6 py-3 bg-[#65fefc] text-[#1b3a4b] rounded-md font-semibold hover:bg-[#006466] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
            <a
              href="https://i.ibb.co/FVV9CVh/business-card-front.png"
              download="Business_Card.png"
              className="inline-flex items-center px-6 py-3 bg-[#65fefc] text-[#1b3a4b] rounded-md font-semibold hover:bg-[#006466] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Business Card
            </a>
          </div>

          <nav className="flex justify-center space-x-6 text-gray-300 mt-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link text-sm py-2 px-4 rounded transition-colors ${
                  isActive
                    ? 'text-[#65fefc] border-b-2 border-[#65fefc]'
                    : 'hover:text-[#65fefc]'
                }`
              }
              end
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `nav-link text-sm py-2 px-4 rounded transition-colors ${
                  isActive
                    ? 'text-[#65fefc] border-b-2 border-[#65fefc]'
                    : 'hover:text-[#65fefc]'
                }`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `nav-link text-sm py-2 px-4 rounded transition-colors ${
                  isActive
                    ? 'text-[#65fefc] border-b-2 border-[#65fefc]'
                    : 'hover:text-[#65fefc]'
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `nav-link text-sm py-2 px-4 rounded transition-colors ${
                  isActive
                    ? 'text-[#65fefc] border-b-2 border-[#65fefc]'
                    : 'hover:text-[#65fefc]'
                }`
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                `nav-link text-sm py-2 px-4 rounded transition-colors ${
                  isActive
                    ? 'text-[#65fefc] border-b-2 border-[#65fefc]'
                    : 'hover:text-[#65fefc]'
                }`
              }
            >
              Education
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link text-sm py-2 px-4 rounded transition-colors ${
                  isActive
                    ? 'text-[#65fefc] border-b-2 border-[#65fefc]'
                    : 'hover:text-[#65fefc]'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Outlet />
      </main>

      <footer className="bg-[#212f45] mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="mailto:arpitkadam922@gmail.com"
              className="text-gray-400 hover:text-[#65fefc] transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/ArpitKadam"
              className="text-gray-400 hover:text-[#65fefc] transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/arpitkadam"
              className="text-gray-400 hover:text-[#65fefc] transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <div className="text-gray-400">
            © 2024 Arpit Kadam. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
