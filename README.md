## Éder – Aplicativo de Divulgação de Vagas de Emprego
Aplicativo mobile desenvolvido como Projeto de Desenvolvimento Mobile (PDM) no curso de Análise e Desenvolvimento de Sistemas do IFNMG – Campus Almenara.

#### Autores

- Patrick Ferreira Carvalho

- Geovana Matos
<hr>

## Sobre o Projeto
O Éder é um aplicativo mobile criado com o objetivo de centralizar a divulgação de vagas de emprego, facilitando o acesso de candidatos às oportunidades disponíveis no mercado de trabalho.
A proposta surgiu diante do crescimento da área de tecnologia da informação e do grande volume de vagas publicadas em diferentes plataformas, como LinkedIn, Twitter e WhatsApp. O aplicativo atua como um centralizador, permitindo que usuários visualizem e se candidatem a vagas de forma simples e rápida.
O projeto foi desenvolvido como um MVP (Minimum Viable Product), focando nas funcionalidades essenciais para entrega de uma solução funcional.

### Tecnologias Utilizadas

- React Native
- Expo
- JavaScript
- Componentização e padronização de estilos

##### A escolha do React Native junto ao Expo permitiu:
- Desenvolvimento multiplataforma com código único
- Facilidade de testes e compilação
- Criação de interfaces nativas responsivas
- Agilidade no desenvolvimento
- Criação de interfaces nativas responsivas

## Objetivo

Criar uma plataforma acessível e intuitiva que:
- Centralize vagas de emprego
- Permita cadastro de recrutadores e candidatos
- Facilite candidaturas rápidas
- Seja acessível a diferentes faixas etárias

### Tipos de Usuários
O aplicativo possui dois perfis de usuário:

1. Recrutador
- Cadastra vagas de emprego
- Define perguntas específicas para candidatura
- Disponibiliza vagas na plataforma

2. Candidato

- Visualiza vagas disponíveis
- Acessa detalhes da vaga
- Realiza candidatura simplificada
- Responde às perguntas definidas pelo recrutador

## Instalação de Dependências

Siga estes passos para configurar e rodar o projeto Eder localmente:

### Pré-requisitos
Antes de instalar as dependências, certifique-se de ter:
- Node.js instalado na versão compatível 
- npm ou yarn
- Aplicativo Expo Go no celular (para testes rápidos)
- Caso prefira emuladores, ter Android Studio ou da sua preferência configurado

Instalação de Dependências

Siga os passos abaixo para configurar e executar o projeto localmente.

Pré-requisitos

Certifique-se de ter instalado em sua máquina:

Node.js (versão LTS recomendada)

npm ou yarn

Expo Go (para testar no celular)

Android Studio ou Xcode (opcional, para emulador)

1. Clonar o repositório
`sh
git clone https://github.com/GeobdMatos/Eder.git
`
Acesse a pasta do projeto:
`sh
cd Eder
`
2. Instalar as dependências

Utilizando npm:
`sh
npm install
`
Ou utilizando yarn:
`sh
yarn install
`
Esse comando instalará todas as dependências listadas no arquivo package.json, incluindo as bibliotecas do Expo, React Native e demais integrações utilizadas no projeto.

`sh
npm expo install
`

3. Executar o projeto

Para iniciar o servidor de desenvolvimento:
`sh
npx expo start
`
ou
`sh
npm start
`
4. Executar no dispositivo

No celular:

Instale o aplicativo Expo Go.

Execute o projeto.

Escaneie o QR Code exibido no terminal ou navegador.

No emulador:

Android: pressione 'a' após iniciar o projeto.

iOS (macOS): pressione 'i'.
