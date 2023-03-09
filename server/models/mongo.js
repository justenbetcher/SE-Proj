require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI ?? "" //"mongodb+srv://CPS353SE:CPS353SE@dollardetective.hcli2ww.mongodb.net/?retryWrites=true&w=majority";

console.log(process.env.PORT)
console.log(process.env.API_ROOT)
console.log(process.env.MONGO_URI)

const options = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }

const client = new MongoClient(uri, options);
module.exports = {
    connect: ()=> client.connect() 
}