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
        { value: 'AF', text: 'Afeganistão' },
        { value: 'ZA', text: 'África do Sul' },
        { value: 'AL', text: 'Albânia' },
        { value: 'DE', text: 'Alemanha' },
        { value: 'AD', text: 'Andorra' },
        { value: 'AO', text: 'Angola' },
        { value: 'AG', text: 'Antígua e Barbuda' },
        { value: 'SA', text: 'Arábia Saudita' },
        { value: 'DZ', text: 'Argélia' },
        { value: 'AR', text: 'Argentina' },
        { value: 'AM', text: 'Armênia' },
        { value: 'AU', text: 'Austrália' },
        { value: 'AT', text: 'Áustria' },
        { value: 'AZ', text: 'Azerbaijão' },
        { value: 'BS', text: 'Bahamas' },
        { value: 'BD', text: 'Bangladesh' },
        { value: 'BB', text: 'Barbados' },
        { value: 'BH', text: 'Barein' },
        { value: 'BE', text: 'Bélgica' },
        { value: 'BZ', text: 'Belize' },
        { value: 'BJ', text: 'Benim' },
        { value: 'BY', text: 'Bielorrússia' },
        { value: 'BO', text: 'Bolívia' },
        { value: 'BA', text: 'Bósnia e Herzegovina' },
        { value: 'BW', text: 'Botsuana' },
        { value: 'BR', text: 'Brasil' },
        { value: 'BN', text: 'Brunei' },
        { value: 'BG', text: 'Bulgária' },
        { value: 'BF', text: 'Burkina Faso' },
        { value: 'BI', text: 'Burundi' },
        { value: 'BT', text: 'Butão' },
        { value: 'CV', text: 'Cabo Verde' },
        { value: 'CM', text: 'Camarões' },
        { value: 'KH', text: 'Camboja' },
        { value: 'CA', text: 'Canadá' },
        { value: 'QA', text: 'Catar' },
        { value: 'KZ', text: 'Cazaquistão' },
        { value: 'TD', text: 'Chade' },
        { value: 'CL', text: 'Chile' },
        { value: 'CN', text: 'China' },
        { value: 'CY', text: 'Chipre' },
        { value: 'CO', text: 'Colômbia' },
        { value: 'KM', text: 'Comores' },
        { value: 'KP', text: 'Coreia do Norte' },
        { value: 'KR', text: 'Coreia do Sul' },
        { value: 'CI', text: 'Costa do Marfim' },
        { value: 'CR', text: 'Costa Rica' },
        { value: 'HR', text: 'Croácia' },
        { value: 'CU', text: 'Cuba' },
        { value: 'DK', text: 'Dinamarca' },
        { value: 'DJ', text: 'Djibouti' },
        { value: 'DM', text: 'Dominica' },
        { value: 'EG', text: 'Egito' },
        { value: 'SV', text: 'El Salvador' },
        { value: 'AE', text: 'Emirados Árabes Unidos' },
        { value: 'EC', text: 'Equador' },
        { value: 'ER', text: 'Eritreia' },
        { value: 'SK', text: 'Eslováquia' },
        { value: 'SI', text: 'Eslovênia' },
        { value: 'ES', text: 'Espanha' },
        { value: 'US', text: 'Estados Unidos' },
        { value: 'EE', text: 'Estônia' },
        { value: 'SZ', text: 'Eswatini' },
        { value: 'ET', text: 'Etiópia' },
        { value: 'FJ', text: 'Fiji' },
        { value: 'PH', text: 'Filipinas' },
        { value: 'FI', text: 'Finlândia' },
        { value: 'FR', text: 'França' },
        { value: 'GA', text: 'Gabão' },
        { value: 'GM', text: 'Gâmbia' },
        { value: 'GH', text: 'Gana' },
        { value: 'GE', text: 'Geórgia' },
        { value: 'GD', text: 'Granada' },
        { value: 'GR', text: 'Grécia' },
        { value: 'GT', text: 'Guatemala' },
        { value: 'GY', text: 'Guiana' },
        { value: 'GN', text: 'Guiné' },
        { value: 'GQ', text: 'Guiné Equatorial' },
        { value: 'GW', text: 'Guiné-Bissau' },
        { value: 'HT', text: 'Haiti' },
        { value: 'HN', text: 'Honduras' },
        { value: 'HU', text: 'Hungria' },
        { value: 'YE', text: 'Iêmen' },
        { value: 'MH', text: 'Ilhas Marshall' },
        { value: 'SB', text: 'Ilhas Salomão' },
        { value: 'IN', text: 'Índia' },
        { value: 'ID', text: 'Indonésia' },
        { value: 'IR', text: 'Irã' },
        { value: 'IQ', text: 'Iraque' },
        { value: 'IE', text: 'Irlanda' },
        { value: 'IS', text: 'Islândia' },
        { value: 'IL', text: 'Israel' },
        { value: 'IT', text: 'Itália' },
        { value: 'JM', text: 'Jamaica' },
        { value: 'JP', text: 'Japão' },
        { value: 'JO', text: 'Jordânia' },
        { value: 'KI', text: 'Kiribati' },
        { value: 'KW', text: 'Kuwait' },
        { value: 'LA', text: 'Laos' },
        { value: 'LS', text: 'Lesoto' },
        { value: 'LV', text: 'Letônia' },
        { value: 'LB', text: 'Líbano' },
        { value: 'LR', text: 'Libéria' },
        { value: 'LY', text: 'Líbia' },
        { value: 'LI', text: 'Liechtenstein' },
        { value: 'LT', text: 'Lituânia' },
        { value: 'LU', text: 'Luxemburgo' },
        { value: 'MK', text: 'Macedônia do Norte' },
        { value: 'MG', text: 'Madagáscar' },
        { value: 'MY', text: 'Malásia' },
        { value: 'MW', text: 'Malaui' },
        { value: 'MV', text: 'Maldivas' },
        { value: 'ML', text: 'Mali' },
        { value: 'MT', text: 'Malta' },
        { value: 'MA', text: 'Marrocos' },
        { value: 'MU', text: 'Maurícia' },
        { value: 'MR', text: 'Mauritânia' },
        { value: 'MX', text: 'México' },
        { value: 'FM', text: 'Micronésia' },
        { value: 'MZ', text: 'Moçambique' },
        { value: 'MD', text: 'Moldávia' },
        { value: 'MC', text: 'Mônaco' },
        { value: 'MN', text: 'Mongólia' },
        { value: 'ME', text: 'Montenegro' },
        { value: 'MM', text: 'Myanmar' },
        { value: 'NA', text: 'Namíbia' },
        { value: 'NR', text: 'Nauru' },
        { value: 'NP', text: 'Nepal' },
        { value: 'NI', text: 'Nicarágua' },
        { value: 'NE', text: 'Níger' },
        { value: 'NG', text: 'Nigéria' },
        { value: 'NO', text: 'Noruega' },
        { value: 'NZ', text: 'Nova Zelândia' },
        { value: 'OM', text: 'Omã' },
        { value: 'NL', text: 'Países Baixos' },
        { value: 'PW', text: 'Palau' },
        { value: 'PA', text: 'Panamá' },
        { value: 'PG', text: 'Papua Nova Guiné' },
        { value: 'PK', text: 'Paquistão' },
        { value: 'PY', text: 'Paraguai' },
        { value: 'PE', text: 'Peru' },
        { value: 'PL', text: 'Polônia' },
        { value: 'PT', text: 'Portugal' },
        { value: 'KE', text: 'Quênia' },
        { value: 'KG', text: 'Quirguistão' },
        { value: 'GB', text: 'Reino Unido' },
        { value: 'CF', text: 'República Centro-Africana' },
        { value: 'CD', text: 'República Democrática do Congo' },
        { value: 'DO', text: 'República Dominicana' },
        { value: 'CZ', text: 'República Tcheca' },
        { value: 'RO', text: 'Romênia' },
        { value: 'RW', text: 'Ruanda' },
        { value: 'RU', text: 'Rússia' },
        { value: 'WS', text: 'Samoa' },
        { value: 'SM', text: 'San Marino' },
        { value: 'LC', text: 'Santa Lúcia' },
        { value: 'KN', text: 'São Cristóvão e Névis' },
        { value: 'ST', text: 'São Tomé e Príncipe' },
        { value: 'VC', text: 'São Vicente e Granadinas' },
        { value: 'SN', text: 'Senegal' },
        { value: 'SL', text: 'Serra Leoa' },
        { value: 'RS', text: 'Sérvia' },
        { value: 'SC', text: 'Seychelles' },
        { value: 'SG', text: 'Singapura' },
        { value: 'SY', text: 'Síria' },
        { value: 'SO', text: 'Somália' },
        { value: 'LK', text: 'Sri Lanka' },
        { value: 'SD', text: 'Sudão' },
        { value: 'SS', text: 'Sudão do Sul' },
        { value: 'SE', text: 'Suécia' },
        { value: 'CH', text: 'Suíça' },
        { value: 'SR', text: 'Suriname' },
        { value: 'TH', text: 'Tailândia' },
        { value: 'TJ', text: 'Tajiquistão' },
        { value: 'TZ', text: 'Tanzânia' },
        { value: 'TL', text: 'Timor-Leste' },
        { value: 'TG', text: 'Togo' },
        { value: 'TO', text: 'Tonga' },
        { value: 'TT', text: 'Trinidad e Tobago' },
        { value: 'TN', text: 'Tunísia' },
        { value: 'TM', text: 'Turcomenistão' },
        { value: 'TR', text: 'Turquia' },
        { value: 'TV', text: 'Tuvalu' },
        { value: 'UA', text: 'Ucrânia' },
        { value: 'UG', text: 'Uganda' },
        { value: 'UY', text: 'Uruguai' },
        { value: 'UZ', text: 'Uzbequistão' },
        { value: 'VU', text: 'Vanuatu' },
        { value: 'VA', text: 'Vaticano' },
        { value: 'VE', text: 'Venezuela' },
        { value: 'VN', text: 'Vietnã' },
        { value: 'ZM', text: 'Zâmbia' },
        { value: 'ZW', text: 'Zimbábue' }
    ];

    const [estados, setEstados] = useState(Array);
    const [estado, setEstado] = useState('');

    const [cidades, setCidades] = useState(Array);
    const [cidade, setCidade] = useState('');

    function carregarEstados() {
        if (pais !== '') {
            const url = `http://localhost:80/webserver/estados.php?sigla_pais=${pais}`;
            fetch(url)
                .then(response => response.json())
                .then(json => json.map(estado => ({ 'text': estado, 'value': estado })))
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
            const url = `http://localhost/webserver/cidades.php?nome_estado=${estado}`;
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

    function LimparTela() {
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
            {pais !== '' && <FormSelect idSelect={"Estados"} opcoesSelect={estados} opcaoSelecionada={estado} onChangeSelect={setEstado}></FormSelect>}
            {pais !== '' && estado !== '' && <FormSelect idSelect={"Cidades"} opcoesSelect={cidades} opcaoSelecionada={cidade} onChangeSelect={setCidade} ></FormSelect>}
            <div className="BoardButton">
                <button className='BotaoEnviar' onClick={() => {
                    if (nome === '' || pais === '' || estado === '' || cidade === '') {
                        alert("Insira corretamente as informações")
                    }
                }}>Enviar</button>
                <button className='BotaoLimpar' onClick={LimparTela}>Limpar</button>
            </div>

        </form>
    )
}
