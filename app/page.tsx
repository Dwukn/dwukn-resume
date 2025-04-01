'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, Linkedin, Mail, Code, Terminal, Briefcase } from 'lucide-react';
import React from 'react';

interface ResumeOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  tags: string[];
}

export default function Home() {
  const [hoveredResume, setHoveredResume] = useState<string | null>(null);
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    // Check user preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setCurrentTheme(prefersDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  const resumeOptions: ResumeOption[] = [
    {
      id: 'web-dev',
      title: 'Full Stack Developer',
      description:
        'Specialized in modern web technologies including React.js, Next.js, and Node.js with a focus on building responsive and performant applications.',
      icon: <Code size={32} className="text-blue-600" />,
      color: 'bg-gradient-to-r from-blue-500 to-blue-700',
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Microservices', 'GoLang']
    },
    {
      id: 'sde',
      title: 'Software Engineer',
      description:
        'Strong background in software architecture, algorithms, data structures, and full-stack development with experience in multiple programming paradigms.',
      icon: <Terminal size={32} className="text-purple-600" />,
      color: 'bg-gradient-to-r from-purple-500 to-purple-700',
      tags: ['Python', 'C++', 'Algorithm Design', 'System Architecture', 'Database Design']
    },
    {
      id: 'product',
      title: 'Product Manager',
      description:
        'Experience in product strategy, user research, and cross-functional team leadership with a focus on delivering customer-centric solutions.',
      icon: <Briefcase size={32} className="text-green-600" />,
      color: 'bg-gradient-to-r from-green-500 to-green-700',
      tags: ['Product Strategy', 'User Research', 'Team Leadership', 'Market Analysis', 'Agile']
    },
  ];

  return (
    <div className={`min-h-screen ${currentTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <Head>
        <title>Dawood Khan Resume</title>
        <meta
          name="description"
          content="View my specialized resumes for Full Stack Development, Software Engineering, and Product Management roles."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className={`${currentTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow sticky top-0 z-50 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${currentTheme === 'dark' ? 'bg-blue-600' : 'bg-blue-500'}`}>
  <Image
    src="/me.png"
    alt="User Avatar"
    width={48}
    height={48}
    className="rounded-full"
  />
</div>

            <h1 className="text-3xl font-bold">Dawood Khan</h1>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${currentTheme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            >
              {currentTheme === 'dark' ? '☀️' : '🌙'}
            </button>
            <a
              href="https://github.com/dwukn"
              target="_blank"
              rel="noopener noreferrer"
              className={`${currentTheme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/dwukn"
              target="_blank"
              rel="noopener noreferrer"
              className={`${currentTheme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:dawood220a@gmail.com"
              className={`${currentTheme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {/* <div className={`py-20 ${currentTheme === 'dark' ? 'bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900' : 'bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className={`text-4xl font-extrabold ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'} sm:text-5xl sm:tracking-tight`}>
              Resume Collection
            </h2>
            <p className={`mt-5 max-w-2xl mx-auto text-xl ${currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
              Full Stack Developer • Software Engineer • Product Manager
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#resume-options"
                className={`px-6 py-3 border border-transparent text-base font-medium rounded-md ${
                  currentTheme === 'dark'
                    ? 'text-white bg-blue-600 hover:bg-blue-700'
                    : 'text-white bg-blue-600 hover:bg-blue-700'
                } md:py-4 md:text-lg md:px-8 shadow-lg transform transition hover:-translate-y-1`}
              >
                View My Resumes
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Resume Cards */}
        <div id="resume-options" className="mt-8 mb-16">
          <h2 className={`text-3xl font-bold ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'} mb-8 text-center`}>
            Select a Resume
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {resumeOptions.map((resume) => (
              <div
                key={resume.id}
                className={`relative ${currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border ${currentTheme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}
                onMouseEnter={() => setHoveredResume(resume.id)}
                onMouseLeave={() => setHoveredResume(null)}
              >
                {/* Color Bar */}
                <div className={`h-2 ${resume.color} w-full`}></div>

                {/* Card Content */}
                <div className={`p-6 ${hoveredResume === resume.id ? (currentTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-100') : ''}`}>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-opacity-10 bg-blue-100">
                    {resume.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'} text-center`}>
                    {resume.title}
                  </h3>
                  <p className={`mt-3 ${currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-center`}>
                    {resume.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {resume.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-1 rounded-full ${
                          currentTheme === 'dark'
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-col space-y-3">
                    <Link
                      href={`/resume/${resume.id}`}
                      className={`${resume.color} text-white px-4 py-3 rounded-md font-medium flex items-center justify-center transition hover:opacity-90`}
                    >
                      <ExternalLink size={18} className="mr-2" />
                      View Resume
                    </Link>
                    {/* <a
  href={`/api/download-resume?type=${resume.id}`}
  className={`${
    currentTheme === 'dark'
      ? 'bg-gray-700 hover:bg-gray-600 text-white'
      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
  } px-4 py-3 rounded-md font-medium flex items-center justify-center transition`}
>
  <ArrowDownToLine size={18} className="mr-2" />
  Download Source
</a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Me Section */}
        <section className={`mt-16 ${currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-8 border ${currentTheme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:flex-shrink-0 flex justify-center md:justify-start">
              <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-blue-500">
                {/* <User size={128} className={`${currentTheme === 'dark' ? 'text-gray-600' : 'text-gray-300'}`} /> */}
                <Image
    src="/me.png"
    alt="User Avatar"
    width={128}
    height={128}
    className={`${currentTheme === 'dark' ? 'filter grayscale' : 'filter brightness-110'}`}  // Optional styling based on the theme
  />
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:ml-6">
              <h2 className={`text-2xl font-bold ${currentTheme === 'dark' ? 'text-white' :
                  'text-gray-900'} mb-2`}>About Me</h2>
              <p className={`${currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
leading-relaxed`}>
                I&#39;m a passionate developer with a deep interest in crafting efficient and
                scalable software solutions.
                With experience in web development, machine learning, and system design, I
                thrive on solving
                challenging problems and bringing ideas to life. I enjoy working in
                collaborative environments,
                where I can contribute my technical skills while continuously learning and Let me know if you&#39;d like any refinements! 🚀
                growing.
              </p>
            </div>
          </div>

          {/* Key Skills */}
          <div className="mt-8">
  <h3 className={`text-lg font-semibold ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>Key Skills</h3>
  <div className="flex flex-wrap gap-x-3 gap-y-2">
    {[
      { skill: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { skill: 'Python', url: 'https://www.python.org/' },
      { skill: 'C++', url: 'https://en.cppreference.com/w/' },
      { skill: 'React.js', url: 'https://reactjs.org/' },
      { skill: 'Next.js', url: 'https://nextjs.org/' },
      { skill: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      { skill: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
      { skill: 'Node.js', url: 'https://nodejs.org/' },
      { skill: 'Product Strategy', url: 'https://en.wikipedia.org/wiki/Product_strategy' },
      { skill: 'UI/UX Design', url: 'https://www.interaction-design.org/literature/topics/ui-design' },
      { skill: 'Team Leadership', url: 'https://en.wikipedia.org/wiki/Leadership' },
      { skill: 'Agile Methodologies', url: 'https://www.agilealliance.org/agile101/' },
      { skill: 'System Architecture', url: 'https://en.wikipedia.org/wiki/Systems_architecture' },
      { skill: 'Database Design', url: 'https://en.wikipedia.org/wiki/Database_design' },
      { skill: 'REST APIs', url: 'https://restfulapi.net/' },
      { skill: 'Git', url: 'https://git-scm.com/' }
    ].map(({ skill, url }) => (
      <a href={url} target="_blank" rel="noopener noreferrer" key={skill}>
        <span
          className={`${
            currentTheme === 'dark' ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
          } px-3 py-1 rounded-full text-sm font-medium`}
        >
          {skill}
        </span>
      </a>
    ))}
  </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${currentTheme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} mt-auto border-t ${currentTheme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div>© {new Date().getFullYear()} Dawood Khan. All Rights Reserved.</div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline hover:text-blue-500">Home</a></li>
              <li><a href="#resume-options" className="hover:underline hover:text-blue-500">Resumes</a></li>
              <li><a href="mailto:dawood220a@gmail.com" className="hover:underline hover:text-blue-500">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
