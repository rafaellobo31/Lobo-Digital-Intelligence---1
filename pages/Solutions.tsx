
import React from 'react';
import { Calendar, Layers, Layout, Bot, Share2, Check } from 'lucide-react';

const Solutions: React.FC = () => {
  const items = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Sistemas de agendamento inteligente",
      problem: "Perda de produtividade com gestão manual de horários e desistências não previstas.",
      solution: "Algoritmos de IA que otimizam a agenda em tempo real e realizam confirmações automáticas.",
      benefit: "Redução drástica de 'no-show' e maximização da capacidade operacional da equipe."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Plataformas SaaS personalizadas",
      problem: "Software de mercado que não atende às particularidades críticas do fluxo do negócio.",
      solution: "Desenvolvimento de infraestrutura escalável em nuvem com funcionalidades sob medida.",
      benefit: "Propriedade tecnológica, redução de custos com licenças e total controle sobre os dados."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Dashboards e painéis administrativos",
      problem: "Dificuldade em visualizar métricas importantes em meio a planilhas e dados dispersos.",
      solution: "Visualização de dados dinâmica com insights gerados por modelos de inteligência de negócios.",
      benefit: "Decisões baseadas em fatos e visualização clara da saúde financeira e operacional em tempo real."
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Chatbots e assistentes corporativos",
      problem: "Sobrecarga da equipe de suporte e vendas com dúvidas repetitivas e processos de triagem.",
      solution: "Assistentes baseados em LLMs (Large Language Models) que entendem contexto e resolvem problemas.",
      benefit: "Atendimento 24/7 de alta qualidade e liberação do time para tarefas mais complexas."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Integrações com APIs e meios de pagamento",
      problem: "Ecossistema digital desconectado gerando retrabalho manual entre diferentes plataformas.",
      solution: "Conectores robustos que unificam CRMs, ERPs e gateways de pagamento de forma fluida.",
      benefit: "Automação completa do fluxo de venda, faturamento e sincronização de estoque/dados."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">
            Soluções que <span className="text-gradient">Resolvem Problemas</span>.
          </h1>
          <p className="text-slate-400 text-lg">
            Combinamos engenharia de software moderna com inteligência artificial para criar ferramentas que se tornam o coração da sua operação.
          </p>
        </div>

        <div className="space-y-12">
          {items.map((item, index) => (
            <div key={index} className="glass rounded-3xl overflow-hidden border border-white/5 flex flex-col lg:flex-row hover:border-brand-blue/20 transition-all">
              <div className="p-8 lg:p-12 lg:w-1/3 bg-brand-navy flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <div className="h-1 w-12 bg-brand-blue rounded-full"></div>
              </div>
              
              <div className="p-8 lg:p-12 flex-grow grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">O Problema</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-4">Nossa Solução</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.solution}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-green-500 mb-4">Benefício Empresarial</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-semibold">{item.benefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
