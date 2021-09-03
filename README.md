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
4. Renomeie `example.local.dev.env` -> `local.dev.env` e `example.local.test.env` -> `local.test.env`
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
npm i
```

## Casos de Teste
