
conn = new Mongo();
db = conn.getDB("shops");

// gt & gte
db.products.find({price: {$gt: 130}});
db.products.find({price: {$gt: 130}}).count();
db.products.find({price: {$gte: 599}});

// lt & lte
db.products.find({price: {$lt: 30}});
db.products.find({price: {$lte: 24.99}});


