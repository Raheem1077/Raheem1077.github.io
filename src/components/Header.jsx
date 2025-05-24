import { useState } from 'react'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Abdul Raheem</h1>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
