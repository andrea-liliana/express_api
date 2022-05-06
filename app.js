// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

// HTTP METHODS
// GET - Creación de endpoint que regresa una lista
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Andrea1"}
    const explorer2 = {id: 2, name: "Andrea2"}
    const explorer3 = {id: 3, name: "Andrea3"}
    const explorer4 = {id: 4, name: "Andrea4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
}) 

// GET - Creación de endpoint que regresa un objeto
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id:1, name: "Andrea"}
    res.status(200).json(explorer)
})

// POST - Creación de endpoint que se encarga de crear un objeto 
app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body // Parámetros de un cliente
    console.log(requestBody)
    res.status(201).json({message: "Created"})
})

// PUT - Creación de un endpoint que se encargue de actualizar un objeto
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body // Parámetros de un cliente
    res.status(200).json({message: "Updated!"})
})

// DELETE - Creación de un endpoint para eliminar un objeto
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body // Parámetros de un cliente
    res.status(200).json({message: "Deleted"})
})