
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

export function App() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mapeia o título da página baseado na aba selecionada
  const getPageTitle = () => {
    switch (activeTab) {
      case 'overview':
        return 'Visão Geral';
      case 'transactions':
        return 'Gerenciar Transações';
      case 'reports':
        return 'Relatórios e Análises';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* 1. Sidebar Fixa */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Container Principal */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* 2. Header Superior */}
        <Header title={getPageTitle()} />

        {/* 3. Área de Conteúdo Dinâmica */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-800 mb-2">Bem-vindo ao seu Dashboard Financeiro!</h2>
                  <p className="text-slate-500 text-sm">
                    Aqui é onde os cards de resumo, gráficos e métricas principais vão aparecer nos próximos passos.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'transactions' && (
              <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-lg font-bold text-slate-800 mb-2">Seção de Transações</h2>
                <p className="text-slate-500 text-sm">Aqui ficará a tabela avançada com filtros e busca.</p>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-lg font-bold text-slate-800 mb-2">Relatórios Detalhados</h2>
                <p className="text-slate-500 text-sm">Aqui ficarão os gráficos analíticos de despesas e receitas.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;


