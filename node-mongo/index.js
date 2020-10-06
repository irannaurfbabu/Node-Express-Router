const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'conFusion';

MongoClient.connect(url, (err, client) => {

    assert.equal(err, null);
    console.log('Connected Successfully...');

    const db = client.db(dbName);
    const collection = db.collection('dishes');

    collection.insertOne({'name': 'Uthapizza', 'description': 'Test'}, (err, result) => {
        assert.equal(err, null);

        console.log('After Insert');
        console.log(result.ops);

        collection.find({}).toArray((err, docs) => {
            assert.equal(err, null);

            console.log('Found Records...');
            console.log(docs);

            db.dropCollection('dishes', (err, result) => {
                assert.equal(err, null);

                client.close();
            });
        });
    });
});