# FireNode

FireNode é um exemplo de como utilizar o banco de dados Firestore do Firebase junto com NodeJs.

## Configurando o Firebase

Basta ter uma conta do google  
Va na pagina inicial do [Firebase](https://firebase.google.com/) e vá em "Primeiros Passos"

Crie um novo projeto  
Depois preencha todos os campos para criar um novo Projeto

![Primeiros Passos](./Firenode/imf1.png "Primeiros Passos")  
![Novo Projeto](./Firenode/img2.png "Novo Projeto")  
![Cadastrando Projeto](./Firenode/img3.png "Cadastrando Projeto ")  
![Cadastrando Projeto](./Firenode/img4.png "Cadastrando Projeto ")  
![Cadastrando Projeto](./Firenode/img5.png "Cadastrando Projeto ")

Va nas Configurações do Projeto no canto superior esquerdo.  
Adicione um App ao seu projeto.

![Configurando Projeto](./Firenode/img6.png "Configurações")
![Configurando Projeto](./Firenode/img7.png "Adicionando App")
![Configurando Projeto](./Firenode/img8.png "Adicionando App")

Vá em "Contas de Serviços" e click em "Gerar nova chave privada", ele vai iniciar um download da chave privada em forma de Json.  
Renomei-e o arquivo baixado para "serviceAccountKey.json" e mova para dentro do repositório do projeto na pasta "config".

![Gerando Chave Privada](./Firenode/img9.png "Gerando Chave Privada")
![Gerando Chave Privada](./Firenode/img10.png "Gerando Chave Privada")

Agora basta criar a base de dados
Vá em Database no canto esquerdo no firebase e depois click em "Criar Banco de Dados"
Depois marque a opção de modo de teste.

![Criando base de dados](./Firenode/img11.png "Criando base de dados")
![Criando base de dados](./Firenode/img12.png "Criando base de dados")

E por fim selecione onde o banco de dados será criado.

![Selecionando local da Base](./Firenode/img13.png "Selecionando local da Base")

## Iniciando o projeto

Para iniciar o projeto basta clonar o repositorio e usar o seguintes comandos dentro do diretorio FireNode

> yarn install  
> yarn dev
