
conn = new Mongo();
db = conn.getDB("shops");


show collections;

db.orderDetails.findOne();


// create index for list of documents
db.orderDetails.createIndex({"additionalFee": 1});
db.orderDetails.getIndexes();

// this result becomes COLLSCAN, because index hold whole document
db.orderDetails.explain('executionStats').find({"additionalFee.deliveryFee": {$gt:8}});
db.orderDetails.find({"additionalFee.deliveryFee": {$gt:8}});

// this result becomes IXSCAN, because search whole document
db.orderDetails.explain('executionStats').find({"additionalFee": {deliveryFee: 8}});


