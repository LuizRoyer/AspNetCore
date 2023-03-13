import { formatCurrentDate } from '../../helpers/data.filter'
import * as C from './styles'

type Props = {
    currentMonth: string
    onMonthChange: (newMonth: string) => void
    income: number
    expense: number
}

export default function ({ currentMonth, onMonthChange, income, expense }: Props) {

    const getMonth = (moreLess: number) => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() + moreLess)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const prevMonth = () => getMonth(-1)
    const nextMonth = () => getMonth(1)
    const result = () => Number((income - expense).toFixed(2))

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={prevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle> {formatCurrentDate(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={nextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>

            <C.ResumeArea>
                <C.ResumeItem color='black' > Receitas: R$ {income.toFixed(2)}</C.ResumeItem>
                <C.ResumeItem color='black'> Despesas: R$ {expense.toFixed(2)}</C.ResumeItem>
                <C.ResumeItem color={result() >= 0 ? 'green' : 'red'}> Saldo: R$ {result()}</C.ResumeItem>
            </C.ResumeArea>
        </C.Container>)
}