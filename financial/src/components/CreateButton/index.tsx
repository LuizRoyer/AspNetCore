import * as C from './styles'

type Props = {
    title: string
    onClick: () => void

}
export default function ({ title, onClick }: Props) {
    return (
        <C.Container>
            <C.Button type='button' onClick={onClick}>{title}</C.Button>
        </C.Container>
    )
}


