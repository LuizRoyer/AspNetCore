import * as C from './App.styles'

import { Item } from './data/entities/Item'
import { Items } from './data/items'
import { useEffect, useState } from 'react'
import { filterByMonth, getCurrentMonth } from './helpers/data.filter'
import TableArea from './components/TableArea'
import InfoArea from './components/InfoArea'
import { Categories } from './data/categories'
import CreateArea from './components/CreateArea'

export default () => {
  const [list, setList] = useState(Items)
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [filterList, setFilterList] = useState<Item[]>([])
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)


  useEffect(() => { // ficar monitorando caso alterado  efetuar metodo
    setFilterList(filterByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (const i in filterList) {
      Categories[filterList[i].category].expense ?
        expenseCount += filterList[i].value :
        incomeCount += filterList[i].value
    }
    setIncome(incomeCount)
    setExpense(expenseCount)

  }, [filterList])


  const monthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const addItem = (item: Item) => {
    setList([...list, item])
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={monthChange}
          income={income}
          expense={expense}
        ></InfoArea>

        <TableArea list={filterList} />
        <CreateArea addItem={addItem}/>

      </C.Body>
    </C.Container>

  )
}