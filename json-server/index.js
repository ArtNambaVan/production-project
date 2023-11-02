const fs = require('fs')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const path = require('path')
const cors = require('cors')


const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

const corsOptions = {
        origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000/')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})


server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 80)
    })
    next()
})



server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({message: 'AUTH ERROR'})
    }
    next()
})

server.use(jsonServer.defaults())
server.use(router)

server.post('/login', cors(corsOptions), (req, res)=> {
    const { username, password } = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const { users } = db

    const userFromBd = users.find(
        (user) => user.username === username && user.password === password
    )

    if (userFromBd) {
        return res.json(userFromBd)
    }

    return res.status(403).json({message: 'AUTH ERROR'})
})


server.listen(8000, () => {
    console.log('JSON Server is running')
})