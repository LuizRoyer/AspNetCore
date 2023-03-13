import { Item } from '../../data/entities/Item'
import TableItem from '../TableItem'
import * as C from './style'

type Props = {
    list: Item[]
}

export default function TableArea({ list }: Props) {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Date</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn >Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => {
                    return (
                        <TableItem key={index} item={item} />
                    )
                })}
            </tbody>
        </C.Table>
    )
}