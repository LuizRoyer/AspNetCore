import * as C from './styles'

type Props = {
    title: string
    value: string
    onChange(newValue: string): void
    list: { key: string, name: string }[]
}

export default function ({ title, value, onChange, list }: Props) {
    return (
        <C.Container>
            {title}
            <C.Select
                value={value}
                onChange={e => onChange(e.target.value)}>
                {list.map(c => (
                    <C.Option key={c.key} value={c.key}>{c.name}</C.Option>
                ))}
            </C.Select>
        </C.Container>
    )
}