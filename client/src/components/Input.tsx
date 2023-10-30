import "./Input.css"

type Props = {
    label: string,
    value: string,
    id: string,
    type: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    name: string
}

const Input = ({ label, value, id, type, handleChange, name }: Props) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{label}</label>
            <input onChange={(e) => handleChange(e)} type={type} id={id} value={value} name={name} />
        </div>
    )
}

export default Input