const {connect} = require('./mongo');
const dbName = 'DollarDetective'
const collectionName = 'users'

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function seedBudgets() {
    let budgets = []

    for (let i = 0; i < 17; i++) {
        let date = new Date(2023, i, random(0, 23)).valueOf()

        let budget = {
            "date": date,
            "weekNo": i + 1,
            "income": [
                {
                    "description": "Pay",
                    "entries": {
                        "description": "Paycheck",
                        "value": random(1111, 9999),
                        "date": date,
                        "weekly": true
                    }
                }
            ],
            "spending": [],
        }

        for (let j = 0; j < 5; j++) {
            let entries = {}

            for (let k = 0; k < 5; k++) {
                entries[k] = {
                    "description": "category" + j + "entry" + k,
                    "value": random(1, 999),
                    "date": date,
                    "weekly": false
                }
                
            }

            let cat = {
                "description": "category" + j,
                entries: entries
            }



            budget.spending[j] = cat
            
        }
        
        budgets[i] = budget
    }

    return budgets
}

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
                ,"budgets": seedBudgets()
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