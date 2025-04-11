import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import './Formulario.css';
import FormSelect from '../FormSelect/FormSelect';
import { useEffect } from 'react';

export default function Formulario(props) {
    const [nome, setNome] = useState('');

    const [pais, setPais] = useState('');
    const paises = [
        { value: '', text: 'Selecione um país' },
        { value: 'Argentina', text: 'Argentina' },
        { value: 'Brasil', text: 'Brasil' },
        { value: 'Paraguai', text: 'Paraguai' },
        { value: 'Uruguai', text: 'Uruguai' },
        { value: 'Bolívia', text: 'Bolívia' },
        { value: 'Chile', text: 'Chile' },
        { value: 'Colômbia', text: 'Colômbia' },
        { value: 'Equador', text: 'Equador' },
        { value: 'Guiana', text: 'Guiana' },
        { value: 'Peru', text: 'Peru' },
        { value: 'Suriname', text: 'Suriname' },
        { value: 'Venezuela', text: 'Venezuela' }
    ];

    const [estados, setEstados] = useState(Array);
    const [estado, setEstado] = useState('');

    const [cidades, setCidades] = useState(Array);
    const [cidade, setCidade] = useState('');

    function carregarEstados() {
        if (pais === 'Brasil') {
            const url = 'http://localhost:80/webserver/estados.php';
            fetch(url)
                .then(response => response.json())
                .then(json => json.map(item => ({ 'text': item["nome"], 'value': item["sigla"] })))
                .then(jsonModificado => setEstados([{ text: "Selecione um Estado", value: "" }, ...jsonModificado]))
                .catch((e) => {
                    console.log(e)
                })
        } else {
            setEstados([{ text: "Selecione um Estado", value: "" }])
        }
    }

    function carregarCidades() {
        if (estado !== '') {
            const url = `http://localhost/webserver/cidades.php?sigla=${estado}`;
            fetch(url)
                .then(response => response.json())
                .then(json => json.map(cidade => ({ text: cidade, value: cidade })))
                .then(jsonModificado => setCidades([{ text: 'Selecione a cidade', value: '' }, ...jsonModificado]))
                .catch((e) => {
                    console.log(e)
                })
        } else {

        }
    }

    function LimparTela(){
        setNome('');
        setPais('');
        setEstado('');
        setCidade('');
    }

    useEffect(carregarEstados, [pais]);
    useEffect(carregarCidades, [estado]);

    return (
        <form action={props.action} method={props.method} className="form">
            <div id="Title">Informações Pessoais:</div>
            <FormInput placeholder={"Nome"} idInput={"InputNome"} nameInput={"Nome"} textInput={nome} onChangeInput={setNome}></FormInput>
            <FormSelect idSelect="Paises" opcoesSelect={paises} opcaoSelecionada={pais} onChangeSelect={setPais}></FormSelect>
            {pais === 'Brasil' && <FormSelect idSelect={"Estados"} opcoesSelect={estados} opcaoSelecionada={estado} onChangeSelect={setEstado}></FormSelect>}
            {pais=== 'Brasil' && estado !== '' && <FormSelect idSelect={"Cidades"} opcoesSelect={cidades} opcaoSelecionada={cidade} onChangeSelect={setCidade} ></FormSelect>}
            <div className="BoardButton">
                <button className='BotaoEnviar' onClick={()=>{
                    if(nome ==='' || pais === '' || estado ==='' || cidade ===''){
                        alert("Insira corretamente as informações")
                    }
                }}>Enviar</button>
                <button className='BotaoLimpar' onClick={LimparTela}>Limpar</button>
            </div>

        </form>
    )
}