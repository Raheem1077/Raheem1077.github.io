const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Hello! I'm Abdul Raheem</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate and driven BSCS student currently learning full-stack development 
                with a focus on the MERN stack. I enjoy building web applications and solving 
                real-world problems through code.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm currently exploring Computer Architecture, DBMS, and Data Warehousing while 
                working on an educational web app for NET exam preparation.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Current Focus</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Full-Stack Development (MERN Stack)</li>
                  <li>• Computer Architecture & DBMS</li>
                  <li>• Data Warehousing</li>
                  <li>• Educational Web Applications</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'].map(tech => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
