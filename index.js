const express = require('express')

const app = express()
const port = 3000
app.get('/', (req, res) => {
    return res.send("hello world")
})
app.get('/about', (req, res) => {
    return res.send("about page")
})



app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`))