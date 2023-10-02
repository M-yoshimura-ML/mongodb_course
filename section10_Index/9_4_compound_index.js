
conn = new Mongo();
db = conn.getDB("shops");


// create compound Index
db.products.createIndex({"rating.average": 1, "manufacturedAt": 1});
// getIndexes
db.products.getIndexes();


db.products.explain().find({"rating.average": {$gt:8}, "manufacturedAt": "2022-11-05"});
db.products.explain('executionStats').find({"rating.average": {$gt:8}, "manufacturedAt": "2022-11-05"});

// Index is used
db.products.explain('executionStats').find({"rating.average": {$gt:8}});

// Index is not used, becomes COLLSCAN
// Compound Index is read from left to right
db.products.explain('executionStats').find({"manufacturedAt": "2022-11-05"});


