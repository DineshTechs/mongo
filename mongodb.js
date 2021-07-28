const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true } , (error, client) =>{
    if(error){
        return console.log("Error in Connection");
    }
    //console.log("connected!");
    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name:'Dinesh',
    //     age:'28'
    // }, (error,result) => {
    //     if(error){
    //         return console.log("no insert done")
    //     }

    //     console.log(result);
    // })

    db.collection('users').insertMany(
    [{
        name : 'rrr',
        age : 28
    },
    {
        name : 'eee',
        age:23
    }],(error, result) => {
        if(!error){
            console.log(result);
        }
    })

});