import * as C from './styles'

type Props = {
    title: string
    type: string
    value: string
    onChange: (newValue: string) => void
}

export default function ({ title, type, value, onChange }: Props) {

    return (
        <C.Container>
        <C.Label>{title}
            <C.Input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </C.Label>
        </C.Container>
    )
}