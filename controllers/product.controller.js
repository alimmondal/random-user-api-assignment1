let products = [
    {id: 1, name: 'hammer'},
    {id: 2, name: 'hammer2'},
    {id: 3, name: 'hammer3'},
]

module.exports.getAllProducts=(req,res)=> {
    const {limit, page} = req.query;
    console.log(limit, page);
        res.json(products.slice(0, limit));   
}
module.exports.saveAProduct=(req,res)=> { 
    console.log(req.body);
    products.push(req.body);
    res.send(products);
}
module.exports.getProductDetail=(req,res)=> { 
    const {id} = req.params;
    console.log(id);
    const filter = {_id: id};
    const foundProduct = products.find(product => product.id === Number(id))
    res.status(200).send({
        success: true,
        message: "Success",
        data:foundProduct
    });
    // res.status(500).send({
    //     success:false,
    //     error: "Internal server error."
    // })
    // res.send(foundProduct);
}
module.exports.updateProduct=(req,res)=> { 
    const {id} = req.params;
    // console.log(id);
    const filter = {_id: id};
    const newData = products.find(product => product.id === Number(id));

    newData.id = id;
    newData.name = req.body.name;

    res.send(newData);
}
module.exports.deleteProduct=(req,res)=> { 
    const {id} = req.params;
    // console.log(id);
    const filter = {_id: id};
    deletedData = products.filter(product => product.id !== Number(id));
    res.send(deletedData);
}


