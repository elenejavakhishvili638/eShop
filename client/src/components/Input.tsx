import "./Input.css"

type Props = {
    label: string,
    value: string,
    id: string,
    type: string
}

const Input = ({ label, value, id, type }: Props) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} value={value} />
        </div>
    )
}

export default Input