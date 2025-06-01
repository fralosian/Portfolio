import React, { useRef, useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from './hooks/useInView'; // Importe o hook
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TbBrandJavascript, TbBrandTailwind, TbBrandCss3, TbBrandNodejs, TbBrandReact, TbBrandHtml5, TbBrandMysql, TbBrandGit, TbBrandPhp, TbBrandPython, TbBrandAngular, TbBrandBootstrap } from 'react-icons/tb';

import foto from './img/foto.webp'; // Importe a imagem
import './App.css';

const projects = [
  {
    name: 'Costs',
    description: 'Aplicação web para gerenciamento de custos de projetos.',
    tech: ['React', 'React Router', 'Fetch API', 'Tailwind CSS'],
    url: 'https://appcosts.netlify.app/', /* alterar para o site correto quando subir no Netlify*/
  },
  {
    name: 'Lists For Tasks',
    description: 'Este aplicativo é uma ferramenta de gerenciamento de tarefas.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    url: 'https://lists4tasks.netlify.app',
  },
  {
    name: 'Gamificação',
    description: 'Projeto de gamificação criado para o site de uma distribuidora de água.',
    tech: ['Construct 2', 'Inkscape', 'Audacity', 'GIMP'],
    url: `${process.env.PUBLIC_URL}/jogo/index.html`
  },
];

const skills = [
  { name: 'React', icon: <TbBrandReact /> },
  { name: 'PHP', icon: <TbBrandPhp /> },
  { name: 'Python', icon: <TbBrandPython /> },
  { name: 'Node.js', icon: <TbBrandNodejs /> },
  { name: 'Bootstrap', icon: <TbBrandBootstrap /> },
  { name: 'Tailwind', icon: <TbBrandTailwind /> },
  { name: 'CSS', icon: <TbBrandCss3 /> },
  { name: 'Angular', icon: <TbBrandAngular /> },
  { name: 'MySQL', icon: <TbBrandMysql /> },
  { name: 'Javascript', icon: <TbBrandJavascript /> },
  { name: 'HTML', icon: <TbBrandHtml5 /> },
  { name: 'Git', icon: <TbBrandGit /> },
];

const SectionTitle = ({ children }) => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef);

  return (
    <motion.h2
      ref={titleRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold lg:mb-6 xl:mb-6 lg:mt-6 xl:mt-6 projects-title"
    >
      {children}
    </motion.h2>
  );
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef);

  return (
    <div className="font-serif snap-container bg-slate-900 text-white font-sans select-none">
      {/* Apresentação */}
      <Element name="início" className="section sm:pl-10 flex flex-col sm:flex-row items-center lg:justify-center justify-start bg-slate-700 h-screen">
        <img
          src={foto}
          alt="Foto de Daniel Alves"
          className="border-2 border-blue-400 profile-photo rounded-full p-4 mb-4 w-60 h-60 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-80 xl:h-80"
        />
        <div className="profile-text sm:ml-4 text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-5xl font-bold mb-4 pl-5 pr-5 md:pl-0 lg:pl-0 xl:pl-0"
          >
            Olá, Eu sou <span className="text-blue-400">Daniel Alves</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 2 }}
            className="text-xl text-gray-200 mb-6 font-bold pl-5 pr-5 md:pl-5 lg:pl-0 xl:pl-0"
          >
            Desenvolvedor Back-End
          </motion.p>
        </div>
      </Element>

      {/* Sobre Mim */}
      <Element name="sobre mim" className="section flex flex-col justify-center bg-slate-800 text-center">
        <SectionTitle>SOBRE MIM</SectionTitle>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto pl-2 pr-2 pt-6 sm:text-lg lg:text-2xl"
        >
          Sou apaixonado por tecnologia e desenvolvimento de software. Fascinado pela capacidade da programação em transformar ideias em soluções práticas, iniciei minha jornada aprendendo várias linguagens. Hoje, dedico-me à criação de aplicações web, sempre buscando inovação e eficiência para contribuir com projetos que impactem positivamente as pessoas.
        </motion.p>
      </Element>

      {/* Habilidades */}
      <Element name="habilidades" className="section flex flex-col justify-center bg-slate-900 text-center">
        <SectionTitle>Habilidades</SectionTitle>
        <div ref={skillsRef} className="mt-5 text-3xl grid grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isSkillsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="text-6xl mb-3 hover:scale-110 hover:text-blue-400 transition-all duration-500">
                {skill.icon}
              </div>
              <p className="text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </Element>

      {/* Projetos */}
      <Element name="projetos" className="section py-20 sm:py-2 xs:py-2 bg-slate-800 text-center">
        <SectionTitle className="projects-title">Projetos</SectionTitle>
        <div className="relative w-full">
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-400 bg-opacity-40 text-white p-2 rounded-full hover:bg-gray-500 transition duration-300 z-10"
          >
            <FaChevronLeft />
          </button>

          <div className="projects-container flex overflow-hidden justify-center w-full snap-x snap-mandatory">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 0, transition: { duration: 1.5 } }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
              exit={{ opacity: 0, x: 0, transition: { duration: 1.5 } }}
              transition={{ duration: 0.5 }}
              className="project-item m-5 bg-slate-700 rounded-lg shadow-lg hover:bg-slate-600 transition-all duration-300 flex-none snap-center w-full"
            >
              <div className="flex flex-col md:flex-row w-full">
                <div className="relative w-full mb-4 md:mb-0 md:w-full">
                  <a
                    href={projects[currentIndex].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={require(`./img/${projects[currentIndex].name}.png`)}
                      alt={`${projects[currentIndex].name} Screenshot`}
                      className="rounded-lg object-cover w-full h-64 md:h-auto"
                    />
                    <div className="absolute font-bold bottom-0 left-0 w-full bg-gray-700 bg-opacity-75 text-white text-center py-2 rounded-b-lg">
                      Visitar projeto
                    </div>
                  </a>
                </div>
                <div className="p-4 sm:p-6 flex flex-col justify-between w-full md:w-1/2">
                  <h3 className="text-3xl font-bold text-blue-300 mb-2">{projects[currentIndex].name}</h3>
                  <p className="text-lg">{projects[currentIndex].description}</p>
                  <div className="mt-4">
                    <h6 className="text-lg font-bold text-white mb-2">Tecnologias utilizadas</h6>
                    {projects[currentIndex].tech.map((tech, index) => (
                      <span key={index} className="text-md text-gray-200 mr-1">
                        {tech}
                        {index < projects[currentIndex].tech.length - 1 && (
                          <span className="mx-1">•</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full hover:bg-gray-500 bg-opacity-20 transition duration-300 z-10"
          >
            <FaChevronRight />
          </button>
        </div>
      </Element>

      {/* Contato */}
      <Element name="contato" className="section flex flex-col justify-center items-center min-h-screen bg-slate-900 text-center">
        <div className="flex flex-col justify-center items-center flex-grow">
          <SectionTitle>Contatos</SectionTitle>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center space-x-8 mt-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-lg mb-6 w-full max-w-2xl"
            >
              Estou sempre em busca de novos desafios! Se você tem um projeto ou ideia, entre em contato e vamos criar algo incrível juntos.
            </motion.p>
          </motion.div>

          <div className="flex justify-center items-center space-x-6 mt-6">
            <a href="https://api.whatsapp.com/send?phone=5511946637999&text=Olá,%20Daniel!%20Vim%20pelo%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20entrar%20em%20contato." target='_blank' rel="noopener noreferrer">
              <FaWhatsapp className="text-[40px] cursor-pointer hover:text-green-500" />
            </a>
            <a href='https://github.com/fralosian?tab=repositories' target='_blank' rel="noopener noreferrer">
              <FaGithub className="text-[40px] cursor-pointer hover:text-blue-500" />
            </a>
            <a href='https://linkedin.com/in/danielalves-silva' target='_blank' rel="noopener noreferrer">
              <FaLinkedin className="text-[40px] cursor-pointer hover:text-blue-600" />
            </a>
            <a href="mailto:danielalvesdasilva1998@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-[40px] cursor-pointer hover:text-blue-600" />
            </a>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default App;
