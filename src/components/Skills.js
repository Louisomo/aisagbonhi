import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGit, FaBootstrap } from 'react-icons/fa';
import nextjs from "../assets/img/nextjs.png";
import tailwind from "../assets/img/tailwind.png";
import vite from "../assets/img/vite.png";

export const Skills = () => (
  <div className="skill">
    <h2>Tech Stack</h2>
  <div className="grid grid-cols-4 gap-4">
    <div className="icon-container">
      <FaHtml5 size={48} color="#E34F26"/>
      <p className="text-center text-xl hidden">HTML</p>
      <div className="tooltip">HTML</div>
    </div>
    <div className="icon-container">
      <FaCss3Alt size={48} color="#1572B6"/>
      <p className="text-center text-xl hidden">CSS</p>
      <div className="tooltip">CSS</div>
    </div>
    <div className="icon-container">
      <FaJsSquare size={48} color="#F7DF1E"/>
      <p className="text-center text-xl hidden">JavaScript</p>
      <div className="tooltip">JavaScript</div>
    </div>
    <div className="icon-container">
      <FaReact size={48} color="#61DAFB"/>
      <p className="text-center text-xl hidden">React</p>
      <div className="tooltip">React</div>
    </div>
    <div className="icon-container">
    <img src={nextjs} style={{ width: '100px', height: '100px' }} /> 
      <p className="text-center text-xl hidden">Next</p>
      <div className="tooltip">Next</div>
    </div>
    <div className="icon-container">
    <img src={vite} style={{ width: '48px', height: '48px' }} /> 
      <p className="text-center text-xl hidden">Vite</p>
      <div className="tooltip">Vite</div>
    </div>
    <div className="icon-container">
    <img src={tailwind} style={{ width: '48px', height: '48px' }} /> 
      <p className="text-center text-xl hidden">Tailwind CSS</p>
      <div className="tooltip">Tailwind CSS</div>
    </div>
    <div className="icon-container">
      <FaBootstrap size={48} color="#563D7C"/>
      <p className="text-center text-xl hidden">Bootstrap</p>
      <div className="tooltip">Bootstrap</div>
    </div>
    <div className="icon-container">
      <FaGit size={48} color="#F05032"/>
      <p className="text-center text-xl hidden">Git</p>
      <div className="tooltip">Git</div>
    </div>
  </div>
  </div>
);