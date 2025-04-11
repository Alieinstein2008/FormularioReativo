import './FormInput.css'
export default function FormInput({ idInput, nameInput, textInput, onChangeInput, placeholder }) {
    return (
        <>
            <input
                type="text"
                name={nameInput}
                id={idInput}
                value={textInput}
                onChange={(e) => onChangeInput(e.target.value)}
                autoComplete="off"
                placeholder={placeholder}
            />
        </>

    )
}