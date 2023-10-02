
conn = new Mongo();
db = conn.getDB("shops");


// $match, $project
db.sales.aggregate([
    {$match: {product: {$in:["Smartwatch", "Headphones"]}}},
    {$project:{_id:0,  customerName:1, product:1, totalPrice:1, date: 1}}
]);


// $match, $project, $sort
db.sales.aggregate([
    {$match: {product: {$in:["Smartwatch", "Headphones"]}}},
    {$project:{_id:0,  customerName:1, product:1, totalPrice:1, date: 1}},
    {$sort: {date: -1}}
]);

// $project + $concat
db.sales.aggregate([
    {$match: {product: {$in:["Smartwatch", "Headphones"]}}},
    {$project:{_id:0,  customerName:1, product:{$concat:["$orderID", " ", "$product"]}, totalPrice:1, date: 1}},
    {$sort: {date: -1}}
]);

