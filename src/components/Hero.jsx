
const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-32 mt-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Abdul Raheem
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          BSCS Student & Full-Stack Developer
        </p>
        <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
          Passionate about building web applications and solving real-world problems through code
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View My Work
          </button>
          <a 
            href="https://github.com/abdulraheem5335" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
