// pages/index.js
export default function Home() {
    return (
      <div className="container mx-auto h-full px-6 bg-white py-6 text-gray-800">
        {/* Header */}
        <header className="text-center mb-4">
          <h1 className="text-2xl font-semibold">Dawood Khan</h1>
        </header>

        {/* Contact Info */}
        <div className="text-center mb-4">
          <p className="text-sm">
            Email: <a href="mailto:dawood220a@gmail.com">dawood220a@gmail.com</a> |
            LinkedIn: <a href="https://www.linkedin.com/in/dwukn" target="_blank" rel="noopener noreferrer">dwukn</a> |
            Mobile: <a href="tel:+919550272262">+91-9550272262</a> |
            GitHub: <a href="https://github.com/dwukn" target="_blank" rel="noopener noreferrer">dwukn</a>
          </p>
        </div>

        {/* Education */}
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b-2 pb-1">Education</h2>
          <div className="mt-2">
            <h3 className="text-sm font-semibold">LIET, Osmania University <span className="text-xs text-gray-500 float-right">Hyderabad, India</span></h3>
            <p className="italic text-xs">Bachelor of Engineering - Artificial Intelligence and Machine Learning</p>
            <p className="text-xs">CGPA: 8.2</p>
            <p className="text-xs text-gray-500 float-right">2024 - 2025</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b-2 pb-1">Skills Summary</h2>
          <ul className="list-disc pl-6 mt-2 text-sm">
            <li><strong>Languages:</strong> Python, C/C++, JavaScript, JAVA</li>
            <li><strong>Frameworks:</strong> React.js, Next.js, TypeScript, Tailwind CSS, TensorFlow, Keras, NodeJS</li>
            <li><strong>Tools:</strong> Docker, GIT, MariaDB, MySQL, SQLite, RESTful APIs</li>
            <li><strong>Platforms:</strong> Linux, Web, Arduino, Raspberry</li>
            <li><strong>Soft Skills:</strong> Leadership, Event Management, Writing, Public Speaking, Time Management</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b-2 pb-1">Experience</h2>
          <div className="mt-2">
            <h3 className="text-sm font-semibold">Rinze <span className="text-xs text-gray-500 float-right">Hyderabad, India</span></h3>
            <p className="italic text-xs">Full Stack Web Developer <span className="text-xs text-gray-500 float-right">2024 - 2025</span></p>
            <ul className="list-disc pl-6 mt-1 text-xs">
              <li>Developed an internal admin panel to streamline user management and improve workflow.</li>
              <li>Built frontend with Next.js and TypeScript, ensuring smooth user experience.</li>
              <li>Integrated Node.js backend with MongoDB for data management.</li>
              <li>Implemented role-based access control (RBAC) for enhanced security.</li>
              <li>Optimized API integration, improving response times by 30%.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b-2 pb-1">Projects</h2>
          <div className="mt-2">
            <h3 className="text-sm font-semibold">FileFlex – Multimedia Conversion Application</h3>
            <p className="text-xs"><span className="italic">C++, JavaScript</span></p>
            <ul className="list-disc pl-6 mt-1 text-xs">
              <li>Developed a cross-platform tool, boosting conversion speed by 80% and improving user satisfaction.</li>
            </ul>
          </div>

          <div className="mt-2">
            <h3 className="text-sm font-semibold">Boardify – Collaborative Whiteboard Platform</h3>
            <p className="text-xs"><span className="italic">Next.js, Python</span></p>
            <ul className="list-disc pl-6 mt-1 text-xs">
              <li>Led development of a real-time collaborative whiteboard with PDF exports and WebSockets integration.</li>
            </ul>
          </div>

          <div className="mt-2">
            <h3 className="text-sm font-semibold">Kompresso – Image Compression Tool</h3>
            <p className="text-xs"><span className="italic">TypeScript, C++</span></p>
            <ul className="list-disc pl-6 mt-1 text-xs">
              <li>Built a tool to reduce image file sizes by 90%, improving speed by 40% over traditional methods.</li>
            </ul>
          </div>

          <div className="mt-4">
    <h3 className="text-lg font-semibold">KlipB – Clipboard Manager</h3>
    <p><span className="italic text-xs">C++, Wayland</span></p>
    <ul className="list-disc pl-6 mt-1 text-xs">
      <li>Developed a powerful clipboard manager for Linux that allows users to store clipboard data for up to 2 hours or indefinitely.</li>
    </ul>
  </div>
        </section>

        {/* Leadership & Volunteer */}
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b-2 pb-1">Leadership & Volunteer Experience</h2>
          <div className="mt-2">
            <h3 className="text-sm font-semibold">Team Lead in SIH</h3>
            <ul className="list-disc pl-6 mt-1 text-xs">
              <li>Led a team of 5 engineers to develop a space technology prototype.</li>
              <li>Engaged with industry experts to ensure real-world feasibility of the project.</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
