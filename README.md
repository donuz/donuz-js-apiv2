# Donuz API
Biblioteca para JS

## Instalação
### Instalação via github
    Faça o download da biblioteca:

~~~
git clone https://github.com/donuz/donuz-js.git
~~~

    Após o download, via terminal, navegue até a pasta donuz-js e rode o seguinte comando: 

```bash
$ npm install
```
### Instalação via npm 
```bash
$ npm install donuz-js
```


### Configurando variáveis da API

Crie um arquivo config.json dentro da pasta donuz-config e adicione o seu Token e o ID do seu estabelecimento:

```js
{"token":"token de acesso a api",
"estabelecimento_id":"id do estabelecimento"}
```


## Exemplo de Uso
Inclua a biblioteca em seu arquivo JS :
```js
import { Donuz } from 'donuz-js/Donuz'
```

Após importar a biblioteca já estará disponível para ser utilizada, como no exemplo abaixo:

```js
Donuz.prizes.getRewards();
```

## Documentação da API

Acesse [donuz.co/api](http://donuz.co/api) para referência.

## Observação

Caso você não possua as informações do Token ou ID do seu estabelecimento, entre em contato com o suporte da [Donuz](http://www.donuz.com.br/).
