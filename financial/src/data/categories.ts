import { Category } from "./entities/Category";


export const Categories: Category = {

    food: { title: 'Alimentação', color: 'red', expense: true },
    shopping: { title: 'Compras', color: 'yellow', expense: true },
    bill: { title: 'Boletos', color: 'orange', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true },
    invoice: { title: 'Fatura', color: 'purple', expense: true },
    pay: { title: 'Recebimentos', color: 'green', expense: false },

}