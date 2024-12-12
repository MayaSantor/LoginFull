import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (request, response) => {

    users.push(request.body)

    response.status(201).json(request.body)
})

app.get('/usuarios', (request, response) => { 
    response.status(200).json(users)
})

app.listen(3002) /* porta em que o servidor vai rodar */


/* Usuário: mayaracortes
Senha: senhabanco */

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