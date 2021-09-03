# Lawsuits Manager

### Um simples gerenciador de processos. Typescript | TypeORM | Arquitetura em Camadas

## Sobre

Um simples gerenciador de processos que permite o cadastro das informações pertinentes à um processo como Número do Processo, estado em que o mesmo está sendo executado, data de criação, entre outros.

Cadastro de informações do cliente, como nome, cnpj e estado em que o cliente se encontra. Os processos são obrigatoriamente anexados a um cliente do escritório.:

- Cadastro de clientes
- Cadastro de processos
- Listagem de clientes com filtros
- Listagem de processos com filtros
- Listagem de processos de clientes com filtros
- Contagem de processos com filtros
- Soma de valores de processos
- Média de valores dos processos do cliente com filtro para sua região
- Busca de processos por valores, datas e termos

## Banco de Dados

Link para acessar a modelagem do [Banco de Dados]

[banco de dados]: https://dbdesigner.page.link/v1MQtxbiG3zif6Bm9

## Documentação da API

Link para acessar a [Documentação da API]

[documentação da api]: https://documenter.getpostman.com/view/16971079/U16eunpm

## Deploy

Esse projeto possui um deploy funcional na Heroku: https://lawsuitsmanager.herokuapp.com

## Como rodar

1. Clone esse repositório

```bash
git clone https://github.com/RafaelBahiense/LawsuitsManager.git
```

2. Instale as dependências

```bash
npm i
```

3. Crie um banco de dados PostgresSQL "your_database" e "your_database_test"
4. Renomeie `.env.example` -> `.env` faça uma cópia e nomeie `.env.test` para os dados do banco de teste
5. Configure os arquivos .env como indicado
6. Rode as migrations

```bash
npm run migration:run
```

7. (Opcional) Rode o seeder

```bash
npm run seed
```

8. Rode o projeto

```bash
npm run dev
```

9. Finalmente acesse http://localhost:4000/api/"rota-desejada" com seu API Client favorito

## Testes

1. Após configurado rode

```bash
npm run test
```

## Casos de Teste

Podem ser verificados rodando os testes automatizados ou pelo deploy e local com as seguintes urls:

Caso de teste 1: Retorna a soma dos processos ativos

> https://lawsuitsmanager.herokuapp.com/api/lawsuit/sum

Caso de teste 2: Retorna a média do valor dos processos no Rio de Janeiro para o Cliente "Empresa A

> https://lawsuitsmanager.herokuapp.com/api/client/1/state/19/average

Caso de teste 3: Retorna o Número de processos com valor acima de R$ 100.000,00

> https://lawsuitsmanager.herokuapp.com/api/lawsuit/count?gt-value=10000000

Caso de teste 4: Retorna a lista de Processos de Setembro de 2007

> https://lawsuitsmanager.herokuapp.com/api/lawsuit?year=2007&month=9

Caso de teste 5: Retorna a lista de processos no mesmo estado do cliente, para cada um dos clientes

> https://lawsuitsmanager.herokuapp.com/api/client/lawsuits?same-origin=true

Caso de teste 6: Retorna a lista de processos que contenham a sigla “TRAB”

> https://lawsuitsmanager.herokuapp.com/api/lawsuit?like=TRAB"
