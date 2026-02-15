
import React from 'react';
import { Monitor, Cpu, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Monitor className="w-10 h-10" />,
      title: "Aplicações Sob Medida",
      description: "Desenvolvimento de sistemas personalizados com foco em performance e escalabilidade. Criamos desde MVPs até plataformas corporativas complexas.",
      features: ["Arquitetura Escalável", "UI/UX Estratégico", "Performance Otimizada", "Segurança de Dados"]
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Inteligência Artificial Aplicada",
      description: "Integração de IA para automação, análise de dados e geração inteligente de conteúdo. Transformamos a forma como sua empresa processa informações.",
      features: ["Processamento de Linguagem Natural", "Visão Computacional", "Modelos Preditivos", "Agentes Autônomos"]
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Consultoria Estratégica",
      description: "Análise de processos e desenho de soluções tecnológicas com foco em eficiência. Ajudamos a mapear onde a tecnologia pode gerar o maior ROI.",
      features: ["Auditoria de Processos", "Roadmap Tecnológico", "Seleção de Stack", "Mentoria Técnica"]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Nossos Serviços</h1>
          <p className="text-slate-400 text-lg">
            Engenharia de alto nível e estratégia de negócio unidas para entregar excelência tecnológica.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] -z-10"></div>
              <div className="glass p-10 md:p-16 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-24 h-24 shrink-0 bg-brand-dark rounded-3xl flex items-center justify-center text-brand-blue border border-white/5 shadow-inner">
                  {service.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-400 mb-8 max-w-2xl leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {service.features.map((f, i) => (
                      <span key={i} className="text-xs font-semibold px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link to="/contato" className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-blue transition-colors group/btn">
                    Falar com especialista sobre isso <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
