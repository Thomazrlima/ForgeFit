# SGB (Sistema de Gerenciamento de Biblioteca)
Exemplo de DDD (Domain-Driven Design)

## Build
Para efetuar o build do projeto, execute o comando:

`mvn clean install`

A máquina onde o build será executado precisar conter:

- Docker (build realizado com sucesso com a versão 28.5.1)
- NodeJS (build realizado com sucesso com a versão v24.11.0)
- NPM (build realizado com sucesso com a versão 11.6.2)

## Execução
Após realizar o build, você pode executar o sistema com o comando:

`docker compose -f docker-compose-sgb.yml up`

Para acessar o sistema, visite o endereço http://localhost:8080