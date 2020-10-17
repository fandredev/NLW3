<br />

# Next Level Week #3 - Happy
![happy](https://user-images.githubusercontent.com/49297012/96337805-10d17780-1060-11eb-8fd2-278f8ea9c660.png)

## :checkered_flag: Índice

* [Sobre](#bulb-sobre)
* [Demo](#iphone-demo)
  * [Deploy](#live)
  * [Web](#web)
  * [Mobile](#mobile)
* [Tecnologias](#computer-tecnologias)
* [Como utilizar](#wrench-como-utilizar)
* [Contatos](#mailbox_with_no_mail-contatos)

## :bulb: Sobre
O happy é uma aplicação web e mobile que tem como objetivo ajudar pessoas a encontrarem casas de acolhimento institucional próximos a sua região e <br> ver detalhes sobre a mesma.
<br>
Aplicação construída durante a semana #3 da Next Level Week evento ministrado pela Rocketseat.

## :iphone: Demo

### Deploy

A aplicação Web poderá ser acessada aqui: https://nlwhappy.vercel.app/

### :computer: Tecnologias:
- React.JS
- React Native
- Expo
- Node.JS
- Typescript
- Express.JS

### :wrench: Como Utilizar (WEB)

1. Clone esse repositório:
```sh 
https://github.com/flubyGit/Next-Level-Week-3.git
```

2. Entre na pasta web:
```sh
cd web
```
3. Abra o projeto no seu editor de texto:

4 No seu terminal, instale os pacotes necessários
```sh 
yarn install (Usando npm? Use 'npm i')
``` 
6. Agora você pode iniciar a aplicação web
```sh 
yarn start (Caso dê erro de "permission denied", use `sudo yarn start`)
```
6. Tudo ok! Abra a página no navegador com o seguinte endereço: http://localhost:3000

<br>
<br>

### :wrench: Como utilizar (Back-End)

1. Clone esse repositório:
```sh 
https://github.com/flubyGit/Next-Level-Week-3.git
```

2. Entre na pasta back-end:
```sh
cd backend

3. Abra o projeto no seu editor de texto:

4 No seu terminal, instale os pacotes necessários
```sh 
yarn install (Usando npm? Use 'npm i')
``` 

5. Agora você pode iniciar a aplicação back-end
```sh 
yarn start (Caso dê erro de "permission denied", use `sudo yarn start`)
 
6. Vamos configurar o banco de dados com as tabelas corretas. No seu terminal, digite:
```sh 
sudo yarn typeorm migration:run
``` 
7. Se tudo deu certo, a aplicação web deverá estar funcionando.

8. Na pasta insomnia dentro do back-end, há um arquivo JSON com as rotas que utilizei na aplicação. É apenas exportar no insomnia e você terá as rotas da aplicação =)

<br>
<br>

### :wrench: Como utilizar (Mobile)

1. Clone esse repositório:
```sh 
https://github.com/flubyGit/Next-Level-Week-3.git
```

2. Entre na pasta back-end:
```sh
cd mobile

3. Abra o projeto no seu editor de texto:

4 No seu terminal, instale os pacotes necessários
```sh 
yarn install (Usando npm? Use 'npm i')
``` 
5. Agora você pode iniciar a aplicação back-end
```sh 
yarn start (Caso dê erro de "permission denied", use `sudo yarn start`)

6. Acesse o navegador com a rota que o Metro Bundler te fornecerá. 
```sh
  Exemplo: Expo DevTools is running at http://localhost:19002
```

7. Baixe o Aplicativo 'Expo' no seu celular

8. Com o expo instalado, entre no aplicativo e clique em SCAN QR Code

9. Coloque o QR Code Junto ao QR code do seu localhost

10. A aplicação será startada no expo =)


### :wrench: Testando Conexão de API com Front-END

1. Clone esse repositório:
```sh 
https://github.com/flubyGit/Next-Level-Week-3.git
```

2. Abra duas abas no terminal e entre na pasta back-end:
```sh
cd back-end && yarn start
cd web(ou cd mobile) && yarn start

3. A aplicação poderá ser testada agora.



## LEMBRETES SOBRE A INTEGRAÇÃO (EXPO)

1. Entre na pasta `backend`
2. Confira se a rota está correta no arquivo de views
```sh
cd backend
No editor de texto, procure -> src/views/images_view.ts
Confira se em 'URL', essa URL está igual ao IP da sua Máquina

 return {
      id: image.id,
      url: `http://192.168.15.17:3333/uploads/${image.path}`
  }
```
3. Se está tudo certo, vamos checar no front-end
4. Na pasta mobile ou web, entre em src/services
5. Em baseURL, cheque se o IP está correto -> 
```sh 
  baseURL: 'http://192.168.15.17:3333' 
```
6. Se sim, a aplicação poderá ser integrada com sucesso!




## :mailbox_with_no_mail: Contatos
E-mail: profissionalf.andre@gmail.com<br>
Linkedin: https://www.linkedin.com/in/devfandre/<br>
Discord: ...this

   
