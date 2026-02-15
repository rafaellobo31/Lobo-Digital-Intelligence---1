
import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, Loader2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    whatsapp: '',
    mensagem: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSubmitted(false);

    try {
      // ID real fornecido pelo usuário: xvzbalnq
      const FORMSPREE_ID = 'xvzbalnq'; 
      
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ nome: '', empresa: '', email: '', whatsapp: '', mensagem: '' });
      } else {
        const data = await response.json();
        setError(data.error || 'Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
      }
    } catch (err) {
      setError('Erro de conexão. Verifique sua internet e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-8">Vamos <span className="text-gradient">Conversar?</span></h1>
            <p className="text-slate-400 text-lg mb-12">
              Transforme seus processos com inteligência aplicada. Preencha o formulário e um de nossos especialistas entrará em contato em até 24h úteis.
            </p>

            <div className="space-y-8">
              <ContactInfoItem 
                icon={<Mail className="w-6 h-6" />}
                label="E-mail"
                value="rafaellobo.ferreira@gmail.com"
              />
              <ContactInfoItem 
                icon={<Phone className="w-6 h-6" />}
                label="WhatsApp"
                value="+55 (71) 98848-3988"
              />
              <ContactInfoItem 
                icon={<MessageSquare className="w-6 h-6" />}
                label="Diagnóstico"
                value="Inicie uma conversa estratégica hoje."
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-blue/5 blur-3xl -z-10"></div>
            <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Nome</label>
                    <input 
                      type="text" 
                      name="nome"
                      required
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors disabled:opacity-50"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Empresa</label>
                    <input 
                      type="text" 
                      name="empresa"
                      required
                      placeholder="Nome da empresa"
                      value={formData.empresa}
                      onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                      className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors disabled:opacity-50"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="exemplo@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors disabled:opacity-50"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Telefone/WhatsApp</label>
                    <input 
                      type="tel" 
                      name="whatsapp"
                      required
                      placeholder="(00) 00000-0000"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors disabled:opacity-50"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Como podemos ajudar?</label>
                  <textarea 
                    name="mensagem"
                    rows={4}
                    required
                    placeholder="Descreva seu desafio ou projeto..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none disabled:opacity-50"
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div className="flex flex-col gap-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group disabled:cursor-not-allowed disabled:bg-slate-700"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-600 text-center leading-relaxed">
                    <strong>Mensagem LGPD:</strong> Seus dados serão utilizados apenas para retorno de contato e fins comerciais da Lobo Digital Intelligence.
                  </p>
                </div>

                {submitted && (
                  <div className="bg-green-500/10 text-green-500 p-4 rounded-xl text-center text-sm font-bold border border-green-500/20 animate-in fade-in zoom-in">
                    Mensagem enviada com sucesso! Em breve entraremos em contato.
                  </div>
                )}

                {error && (
                  <div className="bg-red-500/10 text-red-500 p-4 rounded-xl text-center text-sm font-bold border border-red-500/20 flex items-center justify-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-start gap-6 group">
    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
      {icon}
    </div>
    <div>
      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{label}</h4>
      <p className="text-white font-medium">{value}</p>
    </div>
  </div>
);

export default Contact;
