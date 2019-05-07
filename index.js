

const bigDecimal  = require('js-big-decimal');

testBigdecimal();

function testBigdecimal() {
    console.log(0.1 + 0.2);
    console.log(bigDecimal.add(0.1, 0.2));
}




































function testMongo() {
    const MongoClient = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://admin:admin@localhost:27017/admin", { useNewUrlParser: true })
    .then(async client => {
        const db = client.db('admin');
        const nicolas = db.collection('nicolas');

        const data = (await nicolas.find({}, { sort: { id: -1 }, limit: 1 }).toArray())[0];
        
        await nicolas.findOneAndUpdate(
            { id: { $gt: data.id }},
            {
                $setOnInsert: { id: data.id + 1 }
            }, 
            {
                sort: { id: 1 },
                upsert: true,
                returnNewDocument: true
            }
        );

        const testData = (await nicolas.find({}, { sort: { id: -1 }}).toArray());

        console.log('Last', testData[0].id, ' - Total', testData.length);
        client.close();
    })
    .catch(err => console.log('Error:', err));


    async function insert(collection, session, data) {
        const nextId = data[0].id + 1;
    }
}