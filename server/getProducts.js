const products = require('../products.json')

module.exports = {

getProducts: (req, res) =>{
    if(req.query.price){
        console.log(+req.query.price)
        const prices = products.filter(e =>{
            console.log(e.price)
        return e.price >= +req.query.price
        })
        res.status(200).send(prices)
    } else {
        res.status(200).send(products)
    }
},

getProduct: (req, res) => {
    const product = products.find(e => {
        return e.id === +req.params.id
    })
    if(product){
        res.status(200).send(product)
    } else{
        res.status(500).send('item not in list')
    }
},

// getPrice: (req, res) => {
//     console.log(req.query)
//     if(req.query.price){
//         const prices = products.filter(e =>{
//          e.price = +req.query.price
//         })
//         res.status(200).send(prices)
//     } else {
//         res.status(200).send(products)
//     }
}







