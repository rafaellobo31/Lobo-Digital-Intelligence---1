
import React from 'react';
import { Target, Lightbulb, Shield, Zap, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { icon: <Zap className="w-5 h-5" />, title: "Eficiência", text: "Fazer mais com menos recursos através da automação inteligente." },
    { icon: <Target className="w-5 h-5" />, title: "Estratégia", text: "Cada linha de código deve servir a um propósito de negócio." },
    { icon: <Lightbulb className="w-5 h-5" />, title: "Inovação", text: "Explorar as fronteiras do possível com IA e tecnologias emergentes." },
    { icon: <Shield className="w-5 h-5" />, title: "Clareza", text: "Comunicação objetiva e processos transparentes." },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Evolução Contínua", text: "O software nunca está pronto, ele deve evoluir com o mercado." }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-8">Sobre a <br /><span className="text-gradient">Lobo Digital</span></h1>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                A Lobo Digital Intelligence nasceu com o propósito de aplicar Inteligência Artificial de forma prática e estratégica dentro das empresas. Nosso foco é desenvolver soluções que gerem eficiência, organização e crescimento sustentável por meio da tecnologia.
              </p>
              <p>
                Acreditamos que a tecnologia não deve ser um custo, mas um motor de aceleração. Por isso, trabalhamos de forma consultiva, entendendo o ecossistema de cada cliente para propor o que há de mais moderno e eficiente.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden gradient-border relative glass">
              <img 
                src="https://picsum.photos/seed/tech-office/800/800" 
                alt="Nosso ambiente de trabalho" 
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <div className="text-4xl font-bold text-white mb-1">05+</div>
                <div className="text-brand-blue text-sm font-bold tracking-widest uppercase">Anos de Expertise</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-navy/50 rounded-[3rem] p-12 md:p-20 border border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Nossos Valores</h2>
            <p className="text-slate-500">O que nos guia em cada projeto e decisão.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((val, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 mx-auto bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  {val.icon}
                </div>
                <h4 className="font-bold text-white mb-3">{val.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
