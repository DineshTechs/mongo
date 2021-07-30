// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const {MongoClient, ObjectId, ConnectionClosedEvent} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();
//console.log(id);
//console.log(id.getTimestamp())
MongoClient.connect(connectionURL, { useNewUrlParser: true } , (error, client) =>{
    if(error){
        return console.log("Error in Connection");
    }
    //console.log("connected!");
    //https://docs.mongodb.com/manual/reference/operator/update/
    const db = client.db(databaseName);
      db.collection('users').updateMany({name: 'rrr'},{$inc :{age: -10}} ).then((result) =>{
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
  

});

  // db.collection('users').updateOne({name: 'rrr'},{$inc :{age: -1}} ).then((result) =>{
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'Dinesh',
    //     age:'28'
    // }, (error,result) => {
    //     if(error){
    //         return console.log("no insert done")
    //     }

    //     console.log(result);
    // })

    // db.collection('users').insertMany(
    // [{
    //     name : 'rrr',
    //     age : 28
    // },
    // {
    //     name : 'eee',
    //     age:23
    // }],(error, result) => {
    //     if(!error){
    //         console.log(result);
    //     }
    // })

     // // db.collection('users').findOne({name : 'rrr'} , (error, user) => {
    // //     if(error){
    // //         return console.log("error")
    // //     }
    // //     console.log(user);
    // // })
    // db.collection('users').find({name : 'rrr'}).toArray((error, user) => {
    //     if(error){
    //         return console.log("error")
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find({name : 'rrr'}).count((error, user) => {
    //     if(error){
    //         return console.log("error")
    //     }
    //     console.log(user);
    // })