const {connect} = require('./mongo');
const dbName = 'DollarDetective'
const collectionName = 'users'

async function collection() {
    const client = await connect()
    return client.db(dbName).collection(collectionName)
}

async function getUser(username) {
    const db = await collection();
    const user = await db.findOne({username: username})
    return user
}

async function addUser(username, password) {
    const db = await collection()
    let result = false;
    await getUser(username).then((user) => {
        if (user) {
            //dont insert  
        } else {
            db.insertOne({
                "username": username
                ,"password": password
                ,"budgets": []
            })
            result = true;
        }
    })

    return result;
}

module.exports = {
    collection
    ,getUser
    ,addUser
}