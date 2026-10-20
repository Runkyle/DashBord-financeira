import React from 'react';
import { Wallet, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import type { Transaction } from '../../data/transactions';

interface SummaryCardsProps {
  transactions: Transaction[];
}

export function CardsResumo({ transactions }: SummaryCardsProps) {
  // Cálculos dinâmicos baseados nas transações
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalOutcome = transactions
    .filter((t) => t.type === 'outcome')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalBalance = totalIncome - totalOutcome;

  // Função para formatar em Reais (BRL)
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card: Saldo Total */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Saldo Total</p>
          <h3 className="text-2xl font-bold text-slate-800 mt-1">
            {formatCurrency(totalBalance)}
          </h3>
        </div>
        <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
          <Wallet className="w-6 h-6" />
        </div>
      </div>

      {/* Card: Receitas do Mês */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Receitas do Mês</p>
          <h3 className="text-2xl font-bold text-emerald-600 mt-1">
            {formatCurrency(totalIncome)}
          </h3>
        </div>
        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <TrendingUp className="w-6 h-6" />
        </div>
      </div>

      {/* Card: Despesas do Mês */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Despesas do Mês</p>
          <h3 className="text-2xl font-bold text-rose-600 mt-1">
            {formatCurrency(totalOutcome)}
          </h3>
        </div>
        <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
          <TrendingDown className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}