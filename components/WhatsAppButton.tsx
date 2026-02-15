
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 transition-all hover:scale-110 active:scale-95 group"
      aria-label="Falar pelo WhatsApp"
    >
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.77 0 1.268.408 2.445 1.108 3.399l-.718 2.623 2.685-.705c.92.547 1.99.864 3.137.864 3.181 0 5.767-2.586 5.767-5.77s-2.586-5.77-5.767-5.77zm3.368 8.188c-.145.409-.85.758-1.157.795-.308.036-.616.036-1.026-.072-.25-.072-.56-.169-.941-.325-1.579-.651-2.597-2.266-2.673-2.369-.077-.102-.622-.828-.622-1.581 0-.753.394-1.124.536-1.262.143-.138.311-.173.414-.173.103 0 .206.002.295.004.1.002.234-.038.366.28.143.342.487 1.189.529 1.274.041.085.069.184.012.295-.057.112-.085.184-.17.283-.085.1-.18.223-.257.299-.089.089-.181.187-.078.363.103.176.457.754.981 1.22.673.6 1.242.787 1.419.873.176.085.28.072.384-.047.103-.12.443-.518.562-.697.12-.179.24-.149.403-.089.164.06.1.474 1.298 1.069.179.089.299.134.339.204.041.069.041.402-.104.811z" />
      </svg>
      <span className="absolute right-16 bg-white text-brand-dark px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
        Falar agora
      </span>
    </a>
  );
};

export default WhatsAppButton;
