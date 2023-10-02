
conn = new Mongo();
db = conn.getDB("shops");


// sort price ascending
// returns 25 docs
db.products.find({price: {$gt: 100}}, {price:1}).sort({price: 1});

// sort & skip 
db.products.find({price: {$gt: 100}}, {price:1}).sort({price: -1}).skip(10);

// sort & skip & limit
db.products.find({price: {$gt: 100}}, {price:1}).sort({price: 1}).skip(10).limit(10);

// result is same 
db.products.find({price: {$gt: 100}}, {price:1}).skip(10).limit(10).sort({price: 1});

// paginations 
const pageSize = 10;
let page = 2;
db.products.find().sort({price: -1}).skip((page - 1) * pageSize).limit(pageSize);


