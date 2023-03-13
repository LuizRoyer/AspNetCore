import { useState } from 'react'
import { Categories } from '../../data/categories'
import { Item } from '../../data/entities/Item'
import { getRightMonth } from '../../helpers/data.filter';
import * as C from './styles'
import CreateInput from '../CreateInput'
import CreateSelect from '../CreateSelect';
import CreateButton from '../CreateButton';

type Props = {
    addItem: (item: Item) => void
}

type Combo = {
    key: string
    name: string
}


export default function ({ addItem }: Props) {

    let categories: Combo[] = []
    for (var item in Categories) {
        categories.push({ key: item, name: Categories[item].title })
    }

    const [selectedOption, setSelectedOption] = useState(categories[0].key);
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [value, setValue] = useState('0')

    const AddEvent = () => {
        if (!title?.trim() || value =='0') return
        addItem({ date: getRightMonth(date), category: selectedOption, title: title, value: Number(value) })

        setTitle('')
        setDate('')
        setValue('0')
    }
   
    return (
        <C.Container><br/>
            <CreateInput title='Informe data : ' type='date' value={date} onChange={setDate} />
            <CreateInput title='Informe um descrição :' type='text' value={title} onChange={setTitle} />
            <CreateInput title='informe valor : ' type='number' value={value} onChange={setValue} />
            <CreateSelect title='informe categoria : ' value={selectedOption} onChange={setSelectedOption} list={categories} />

            <CreateButton title={'Adicionar'} onClick={AddEvent} />

        </C.Container>
    )
}

