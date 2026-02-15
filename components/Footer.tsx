
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Pitch */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-purple rounded-lg flex items-center justify-center">
                <Activity className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-display font-extrabold tracking-tight text-white">LOBO DIGITAL</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Desenvolvemos aplicações inteligentes que automatizam processos e elevam a eficiência do seu negócio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-brand-blue text-sm transition-colors">Home</Link></li>
              <li><Link to="/solucoes" className="text-slate-400 hover:text-brand-blue text-sm transition-colors">Soluções</Link></li>
              <li><Link to="/servicos" className="text-slate-400 hover:text-brand-blue text-sm transition-colors">Serviços</Link></li>
              <li><Link to="/sobre" className="text-slate-400 hover:text-brand-blue text-sm transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Soluções</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 text-sm">Sistemas SaaS</li>
              <li className="text-slate-400 text-sm">Dashboards de IA</li>
              <li className="text-slate-400 text-sm">Chatbots Inteligentes</li>
              <li className="text-slate-400 text-sm">Automação Web</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-brand-blue" />
                rafaellobo.ferreira@gmail.com
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-brand-blue" />
                +55 (71) 98848-3988
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2024 Lobo Digital Intelligence. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-xs">Privacidade</a>
            <a href="#" className="text-slate-500 hover:text-white text-xs">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
