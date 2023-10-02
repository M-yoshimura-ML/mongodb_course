
conn = new Mongo();
db = conn.getDB("shops");


// data check
db.sales.find();

// find list of all product
db.sales.distinct("product");

// $match stage
db.sales.aggregate([
    {$match: {product: "Smartwatch"}}
]);

db.sales.find({product: "Smartwatch"});


// and condition
db.sales.aggregate([
    {$match: {product: "Smartwatch", date: {$gte: "2023-07-07"}}}
]);

// or condition
db.sales.aggregate([
    {$match: {$or:[{product: "Smartwatch"}, {date: {$gte: "2023-07-07"}}] }}
]);



