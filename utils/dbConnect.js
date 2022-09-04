
function dbConnect() {
    // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.es092.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // client.connect(err => {
    // const productCollection = client.db("emajohnStore").collection("products");
    // const ordersCollection = client.db("emajohnStore").collection("orders");
    // })
    console.log('Db connected')
}

module.exports = dbConnect;
