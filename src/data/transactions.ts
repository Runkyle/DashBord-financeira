import type { Transaction } from '../types/transaction';

export { type Transaction } from '../types/transaction';

export const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    title: 'Salário Desenvolvedor',
    amount: 4500.00,
    type: 'income',
    category: 'Trabalho',
    date: '2026-10-01',
  },
  {
    id: '2',
    title: 'Supermercado Mensal',
    amount: 850.50,
    type: 'outcome',
    category: 'Alimentação',
    date: '2026-10-05',
  },
  {
    id: '3',
    title: 'Freelance Landing Page',
    amount: 1200.00,
    type: 'income',
    category: 'Freela',
    date: '2026-10-10',
  },
  {
    id: '4',
    title: 'Internet Fibra',
    amount: 120.00,
    type: 'outcome',
    category: 'Contas',
    date: '2026-10-12',
  },
  {
    id: '5',
    title: 'Aluguel do Apartamento',
    amount: 1400.00,
    type: 'outcome',
    category: 'Moradia',
    date: '2026-10-15',
  },
];
