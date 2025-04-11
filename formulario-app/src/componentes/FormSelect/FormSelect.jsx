import './FormSelect.css';
export default function FormSelect({ idSelect, opcoesSelect, onChangeSelect }) {
    let options;
    if (opcoesSelect) {
        options = opcoesSelect.map(
            opt => <option value={opt.value} key={opt.value}>{opt.text}</option>
        )
    }
    return (
        <>
            <select
                type="text"
                id={idSelect}
                onChange={(e) => onChangeSelect(e.target.value)}
            >
                {options}
            </select>

        </>

    )
}