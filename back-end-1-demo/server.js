const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json());

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner',
 'rusty nail', 'desk',]

app.get('/api/inventory', (req, res) =>{
    if (req.query.item) {
        // const filteredItems = inventory
        const filteredItems = inventory.filter(invItems => invItems.
        toLowerCase().includes(req.query.item.toLowerCase()))

        res.status(200).send(filteredItems)
        } else {
            res.status(200).send(inventory)
        }
})
app.get('/api/inventory/:index', (req, res) => {
    res.status(200).send(inventory[+req.params.index])
});

const SERVER_PORT = 5050
app.listen(5050, () => console.log(`server jamming 
on ${SERVER_PORT}`))