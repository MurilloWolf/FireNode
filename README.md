# FireNode

FireNode é um exemplo de como utilizar o banco de dados Firestore do Firebase junto com NodeJs.

## Configurando o Firebase

Basta ter uma conta do google  
Va na pagina inicial do [Firebase](https://firebase.google.com/) e vá em "Primeiros Passos"

Crie um novo projeto  
Depois preencha todos os campos para criar um novo Projeto

![Primeiros Passos](./FireNode/public/imf1.png "Primeiros Passos")  
![Novo Projeto](./FireNode/public/img2.png "Novo Projeto")  
![Cadastrando Projeto](./FireNode/public/img3.png "Cadastrando Projeto ")  
![Cadastrando Projeto](./FireNode/public/img4.png "Cadastrando Projeto ")  
![Cadastrando Projeto](./FireNode/public/img5.png "Cadastrando Projeto ")

Va nas Configurações do Projeto no canto superior esquerdo.  
Adicione um App ao seu projeto.

![Configurando Projeto](./FireNode/public/img6.png "Configurações")  
![Configurando Projeto](./FireNode/public/img7.png "Adicionando App")  
![Configurando Projeto](./FireNode/public/img8.png "Adicionando App")

Vá em "Contas de Serviços" e click em "Gerar nova chave privada", ele vai iniciar um download da chave privada em forma de Json.  
Renomei-e o arquivo baixado para "serviceAccountKey.json" e mova para dentro do repositório do projeto na pasta "config".

![Gerando Chave Privada](./FireNode/public/img9.png "Gerando Chave Privada")  
![Gerando Chave Privada](./FireNode/public/img10.png "Gerando Chave Privada")

Agora basta criar a base de dados
Vá em Database no canto esquerdo no firebase e depois click em "Criar Banco de Dados"
Depois marque a opção de modo de teste.

![Criando base de dados](./FireNode/public/img11.png "Criando base de dados")  
![Criando base de dados](./FireNode/public/img12.png "Criando base de dados")

E por fim selecione onde o banco de dados será criado.

![Selecionando local da Base](./FireNode/public/img13.png "Selecionando local da Base")

## Iniciando o projeto

Para iniciar o projeto basta clonar o repositorio e usar o seguintes comandos dentro do diretorio FireNode

> yarn install  
> yarn dev
