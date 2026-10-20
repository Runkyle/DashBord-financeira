
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CardsResumo } from './components/Card-Resumos';
import { INITIAL_TRANSACTIONS } from './data/transactions';

export function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [transactions] = useState(INITIAL_TRANSACTIONS);

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
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title={getPageTitle()} />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Aqui entram os Cards de Resumo */}
                <CardsResumo transactions={transactions} />

                {/* Bloco de boas-vindas logo abaixo */}
                <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-800 mb-2">Próximo Passo: Gráficos e Tabelas!</h2>
                  <p className="text-slate-500 text-sm">
                    Os cards acima já calculam automaticamente seus ganhos e gastos com base nos dados mockados. Nos próximos passos, vamos adicionar os gráficos e a tabela de histórico.
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
