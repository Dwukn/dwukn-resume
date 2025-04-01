// pages/index.js
export default function Home() {
    return (
      <div className="container mx-auto px-6 py-12 text-gray-800">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-semibold">Dawood Khan</h1>
        </header>

        {/* Contact Info */}
        <div className="text-center mb-12">
          <p>
            Email: <a href="mailto:dawood220a@gmail.com" className="text-blue-600">dawood220a@gmail.com</a> |
            LinkedIn: <a href="https://www.linkedin.com/in/dwukn" className="text-blue-600" target="_blank" rel="noopener noreferrer">dwukn</a> |
            Mobile: <a href="tel:+919550272262" className="text-blue-600">+91-9550272262</a> |
            GitHub: <a href="https://github.com/dwukn" className="text-blue-600" target="_blank" rel="noopener noreferrer">dwukn</a>
          </p>
        </div>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-xl font-bold border-b-2 pb-2">Education</h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">LIET, Osmania University <span className="text-sm text-gray-500 float-right">Hyderabad, India</span></h3>
            <p className="italic">Bachelor of Engineering - Artificial Intelligence and Machine Learning</p>
            <p>CGPA: 8.2</p>
            <p className="text-sm text-gray-500 float-right">2024 - 2025</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-xl font-bold border-b-2 pb-2">Skills Summary</h2>
          <ul className="list-disc pl-6 mt-4">
            <li><strong>Languages:</strong> Python, C/C++, JavaScript, JAVA</li>
            <li><strong>Frameworks:</strong> React.js, Next.js, TypeScript, Tailwind CSS, TensorFlow, Keras, NodeJS</li>
            <li><strong>Tools:</strong> Docker, GIT, MariaDB, MySQL, SQLite, RESTful APIs</li>
            <li><strong>Platforms:</strong> Linux, Web, Arduino, Raspberry</li>
            <li><strong>Soft Skills:</strong> Leadership, Event Management, Writing, Public Speaking, Time Management</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-xl font-bold border-b-2 pb-2">Experience</h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Rinze <span className="text-sm text-gray-500 float-right">Hyderabad, India</span></h3>
            <p className="italic">Full Stack Web Developer <span className="text-sm text-gray-500 float-right">2024 - 2025</span></p>
            <ul className="list-disc pl-6 mt-2">
              <li>Built an internal admin panel to streamline user management and improve workflow efficiency</li>
              <li>Developed the frontend using Next.js and TypeScript, ensuring a smooth and user-friendly experience</li>
              <li>Integrated with Node.js backend and MongoDB database for efficient data storage and retrieval</li>
              <li>Implemented role-based access control (RBAC) to enhance security with appropriate permissions</li>
              <li>Optimized API integration and improved data flow, resulting in a 30% improvement in response times</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-xl font-bold border-b-2 pb-2">Projects</h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">FileFlex – Multimedia Conversion Application</h3>
            <p><span className="italic">C++, JavaScript</span></p>
            <ul className="list-disc pl-6 mt-2">
              <li>Spearheaded the design and development of a cross-platform multimedia conversion tool, improving conversion speed by 80% and enhancing user satisfaction through intuitive UI and fast processing.</li>
            </ul>
          </div>
        </section>

        {/* Leadership & Volunteer */}
        <section className="mb-12">
          <h2 className="text-xl font-bold border-b-2 pb-2">Leadership & Volunteer Experience</h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Team Lead in SIH</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Led a team of 5 engineers in developing a space technology prototype</li>
              <li>Engaged with industry experts to ensure real-world application feasibility</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
