import { Categories } from '../../data/categories'
import { Item } from '../../data/entities/Item'
import { formatDate } from '../../helpers/data.filter'
import * as C from './style'

type Props = {
    item: Item
}

export default function TableItem({ item }: Props) {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn >
                <C.Category color={Categories[item.category].color}>
                    {Categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={Categories[item.category].expense ? 'red' : 'green'}>
                    RS {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    )
}