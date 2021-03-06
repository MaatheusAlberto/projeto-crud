const express = require('express')
const path = require('path') //biblioteca já existende dentro do nodejs

const app = express()

//definindo o template engine - ele procura em todas as pasta os arquivos ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views')) // definindo local do views para o view engine

//Definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: true})) //Habilita server para receber dados via post(formulário)

//rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo teste'
    })
})


//404 error (not found)
app.use((req, res) => { //middleware = client faz a requisição para o servidor
    res.send('Página não encontrada!')
})


//Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))