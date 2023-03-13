import { Item } from './entities/Item'

export const Items: Item[] = [
    { date: new Date(2022, 5, 15), category: 'food', title: 'Zé Food', value: 35.55 },
    { date: new Date(2022, 5, 1), category: 'shopping', title: 'XXXX ', value: 85.55 },
    { date: new Date(2022, 5, 25), category: 'shopping', title: 'Roupas SA', value: 105.55 },
    { date: new Date(2022, 3, 25), category: 'bill', title: 'Água', value: 305.55 },
    { date: new Date(2022, 3, 5), category: 'rent', title: 'Aluguel', value: 500 },
    { date: new Date(2022, 3, 5), category: 'invoice', title: 'mercado', value: 345.67 },
    { date: new Date(2022, 3, 10), category: 'pay', title: 'salario', value: 1500.35 },
]