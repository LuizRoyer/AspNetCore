import { Item } from "../data/entities/Item"

export const getCurrentMonth = () => {
    let date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}`
}

export const filterByMonth = (list: Item[], date: string): Item[] => {
    let result: Item[] = []
    let [year, month] = date.split('-')

    for (let i = 0; i < list.length; i++) {

        if (list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)) {
            result.push(list[i])
        }
    }
    return result
}

export const formatDate = (date: Date): string => `${TwoDigit(date.getDate())}/${TwoDigit(date.getMonth())}/${date.getFullYear()}`

const TwoDigit = (date: number): string => date < 10 ? `0${date}` : `${date}`

export const formatCurrentDate = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-')
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return `${months[parseInt(month) - 1]} ${year}`
}


export const getRightMonth = (date: string): Date => {
    let [year, month, day] = date.split('-')
    return new Date(Number(year), Number(month), Number(day))
} 