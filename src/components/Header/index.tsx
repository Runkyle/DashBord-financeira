import React from 'react';
import { Search, Bell } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      {/* Título dinâmico da página atual */}
      <h1 className="text-xl font-bold text-slate-800">{title}</h1>

      {/* Barra de busca e Perfil */}
      <div className="flex items-center gap-4">
        {/* Input de busca rápida */}
        <div className="relative hidden sm:block">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar transação..."
            className="pl-9 pr-4 py-2 bg-slate-100 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all w-64"
          />
        </div>

        {/* Notificações */}
        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full"></span>
        </button>

        {/* Avatar de perfil simulado */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
          <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm">
            CB
          </div>
          <div className="hidden lg:block text-left">
            <p className="text-sm font-semibold text-slate-800 leading-none">Caio Barros</p>
            <p className="text-xs text-slate-400 mt-1">Dev Front-end</p>
          </div>
        </div>
      </div>
    </header>
  );
}