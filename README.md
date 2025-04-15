# Formulario Reativo Reacjs x PHP

Aplicação Web em ReactJs desenvolvido com objetivo de aplicar conhecimentos relacionados a requisições HTTP, gestão de promessas em JSX e carregamento dinâmico de dados condicionados.
Nesse projeto foi realizado um formulário simples e sem resposta, onde é possível a inserção de um Nome, um País,um Estado e uma Cidade, sendo que, este aparece apenas se algum estado for selecionado, enquanto aquele só aparece caso o País selecionado for o Brasil.
Para a realização desse projeto foi necessário a criação de um servidor local próprio em PHP que, a partir de uma requisição do tipo GET na url (http://localhost:80/webserver/estados.php) é retornado em formato JSON todos os estados do Brasil, enquanto também é possível realizar requisições a mesma url passando a sigla de um Estado existente no país selecionado sendo então retornado todas as cidades desse estado também no formato JSON.

## Screenshot da interface sem preenchimento 
A  interface se apresenta da seguinte maneira quando é carregada

![Screenshot interface inicial sem preenchimento](formulario-app/Previews/FormReact2.jpg)

## Screenshot da interface preenchida
Ao selecionar Brasil no select de paises e qualquer Estado e Cidade nos seus respectivos select

![Screenshot interface inicial sem preenchimento](formulario-app/Previews/FormReact2.jpg)

## Observação
O carregamento de dados a partir de requisições é realizado se, e somente, caso o país selecionado pelo usuário seja Brasil.
A API nessa primeira versão não possui dados de outros países, porém o codigo já contempla essa possibilidade, basta alterar os seguintes arquivos JSON do webserver PHP: [Primeiro arquivo](./estados.json) e [Segundo arquivo](estados_cidades.json).

>[!NOTE]
Enfoca-se as funções JSX presentes no arquivo Formulario.jsx, que serve como componente central e essencial no funcionamento e dinamicidade da aplicação.
>
>[Analise o código clicando aqui](formulario-app/src/componentes/Formulario/Formulario.jsx)

>[!NOTE]
Para o funcionamento integral da aplicação é necessário iniciar um servidor apache local contendo os arquivos do webserver presentes neste repositório, sendo assim as requisições HTTP serão realizadas com sucesso.
