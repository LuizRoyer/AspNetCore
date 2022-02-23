
import './button.css'

export default props =>
    <button
        onClick={e => props.click && props.click(props.label)}
        className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.ac ? 'ac' : ''}
   `}>
        {props.label}
    </button>