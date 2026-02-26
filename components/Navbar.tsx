
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Soluções', path: '/solucoes' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
            <img 
              src="https://drive.google.com/thumbnail?id=1YCe7si9gSiuBdcgDzLdTz7CBNeSrHPtb&sz=w500" 
              alt="Lobo Digital Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-display font-extrabold tracking-tight text-white uppercase">Lobo</span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-brand-blue uppercase opacity-90">Digital Intelligence</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-blue ${location.pathname === link.path ? 'text-brand-blue' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contato"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 group"
          >
            Solicitar Proposta
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl md:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-display font-semibold transition-colors ${location.pathname === link.path ? 'text-brand-blue' : 'text-slate-400'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contato"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-brand-blue text-white px-10 py-4 rounded-full font-bold"
          >
            Falar com especialista
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
