interface Transaction {
    id: string | number,
    title: string,
    amount: number,
    type: 'income' | 'outcome',
    category: string,
    date: string,


}