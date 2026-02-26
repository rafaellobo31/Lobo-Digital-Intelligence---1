
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Zap, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 border border-white/10">
            <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold text-brand-blue tracking-wider uppercase">Lobo Digital Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-display font-extrabold leading-tight mb-8">
            Aplicações Inteligentes para <br />
            <span className="text-gradient">Empresas que Querem Evoluir.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12 leading-relaxed">
            Automação, desenvolvimento web e Inteligência Artificial aplicados para gerar eficiência e crescimento sustentável.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contato" className="w-full sm:w-auto px-10 py-4 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full font-bold transition-all shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2">
              Solicitar proposta
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/contato" className="w-full sm:w-auto px-10 py-4 glass hover:bg-white/5 text-white rounded-full font-bold transition-all border border-white/10 flex items-center justify-center gap-2">
              Falar com especialista
            </Link>
          </div>
        </div>
      </section>

      {/* O Que Fazemos Section */}
      <section className="py-24 bg-brand-dark relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">O Que Fazemos</h2>
              <p className="text-slate-400">Soluções tecnológicas desenhadas para o cenário corporativo atual.</p>
            </div>
            <Link to="/servicos" className="text-brand-blue font-semibold flex items-center gap-2 group">
              Ver todos os serviços <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              icon={<Code className="w-8 h-8 text-brand-blue" />}
              title="Desenvolvimento Web com IA"
              description="Criamos aplicações modernas com Inteligência Artificial integrada para resolver problemas reais e gerar vantagem competitiva."
            />
            <Card 
              icon={<Zap className="w-8 h-8 text-brand-purple" />}
              title="Automação e Integrações"
              description="Automatizamos tarefas e conectamos sistemas para aumentar produtividade e reduzir retrabalho."
            />
            <Card 
              icon={<BarChart3 className="w-8 h-8 text-brand-indigo" />}
              title="Inteligência Aplicada ao Negócio"
              description="Transformamos dados e processos em decisões mais estratégicas através de modelos de processamento inteligente."
            />
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section className="py-24 glass border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Impacto Real na sua Operação. <br />
                <span className="text-brand-blue">Resultados Mensuráveis.</span>
              </h2>
              <div className="space-y-6">
                <ResultItem text="Redução de custos operacionais" />
                <ResultItem text="Aumento de produtividade" />
                <ResultItem text="Automação de tarefas repetitivas" />
                <ResultItem text="Processos mais organizados" />
                <ResultItem text="Escalabilidade digital" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-purple/20 blur-3xl rounded-full"></div>
              <div className="relative gradient-border p-8 glass overflow-hidden">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img 
                      src="https://drive.google.com/thumbnail?id=1YCe7si9gSiuBdcgDzLdTz7CBNeSrHPtb&sz=w500" 
                      alt="Lobo Digital Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider text-sm">Elevator Pitch</h4>
                    <p className="text-xs text-slate-500">Nossa essência</p>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed italic">
                  "A Lobo Digital Intelligence desenvolve aplicações web inteligentes que automatizam processos, reduzem custos e aumentam a eficiência dos negócios. Unimos estratégia, tecnologia e Inteligência Artificial para transformar ideias em soluções digitais escaláveis."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Trabalhamos Section */}
      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-16">Metodologia de Entrega</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <Step number="01" title="Diagnóstico Estratégico" description="Entendemos seu negócio e dores." />
            <Step number="02" title="Planejamento" description="Arquitetura técnica e de dados." />
            <Step number="03" title="Desenvolvimento" description="Execução ágil e de alta performance." />
            <Step number="04" title="Implementação" description="Rollout e treinamento assistido." />
            <Step number="05" title="Evolução Contínua" description="Ajustes finos e novos recursos." />
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Pronto para o próximo nível?</h2>
              <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                Vamos transformar sua operação com tecnologia de ponta e inteligência aplicada.
              </p>
              <Link to="/contato" className="inline-flex px-12 py-5 bg-white text-brand-dark rounded-full font-bold transition-all hover:scale-105 active:scale-95">
                Iniciar Diagnóstico Gratuito
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const Card = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="glass p-10 rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-2xl hover:shadow-brand-blue/5 group">
    <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const ResultItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4 group">
    <CheckCircle2 className="w-6 h-6 text-brand-blue group-hover:scale-125 transition-transform" />
    <span className="text-slate-300 font-medium md:text-lg">{text}</span>
  </div>
);

const Step = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="text-center group">
    <div className="text-5xl font-display font-black text-white/5 group-hover:text-brand-blue/20 transition-colors mb-4">{number}</div>
    <h4 className="text-white font-bold mb-2">{title}</h4>
    <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
  </div>
);

const Activity = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
);

export default Home;
