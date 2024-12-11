import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (request, response) => {

    users.push(request.body)

    response.send('Ok post deu certo')
})

app.get('/usuarios', (request, response) => { 
    response.json(users)
})

app.listen(3000) /* porta em que o servidor vai rodar */

/* 
HTTP Métodos
 - Get: listar
 - Post: criar
 - Put: editar vários
 - Patch: editar um
 - Delete: deletar
 */

/* rotas precisam de:
 1 -  tipo de rota / método HTTP 
 2 - Endereço 
 */