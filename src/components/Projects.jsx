
const Projects = () => {
  const projects = [
    {
      title: "Aura – eCommerce Website (MERN Stack)",
      description: "A full-stack eCommerce web application built using the MERN stack. It allows users to browse products, manage a cart, and simulate an online shopping experience.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Product browsing and detailed views",
        "Cart management",
        "Backend API with CRUD operations",
        "MongoDB Atlas integration"
      ],
      github: "https://github.com/abdulraheem5335/Aura",
      status: "Completed"
    },
    {
      title: "Aura – Static Web Version (HTML/CSS/JS)",
      description: "A static website version of Aura, built using HTML, CSS, and JavaScript. It showcases the design and UI/UX concepts for the Aura eCommerce platform.",
      techStack: ["HTML", "CSS", "JavaScript"],
      features: [
        "Responsive layout with clean design",
        "Multiple product and navigation pages",
        "Interactive elements using vanilla JavaScript"
      ],
      github: "https://github.com/abdulraheem5335/Web-Assignement",
      status: "Completed"
    },
    {
      title: "Password Manager (MERN + Tailwind CSS)",
      description: "A secure and user-friendly Password Manager application built using the MERN stack, styled with Tailwind CSS.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      features: [
        "Add, update, delete, and view stored passwords",
        "Secure data management on the backend",
        "Responsive and modern UI with Tailwind",
        "Encryption and authentication (coming soon)"
      ],
      github: "https://github.com/abdulraheem5335/Password-Manager",
      status: "In Progress"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Projects</h2>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
              
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
