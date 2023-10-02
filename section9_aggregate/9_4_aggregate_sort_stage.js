
conn = new Mongo();
db = conn.getDB("shops");


// $match, $group, $sort 
db.sales.aggregate([
    {$match: {product: {$in:["Smartwatch", "Headphones"]}}},
    {$group:{_id: {product:"$product"}, total: {$sum:"$totalPrice"}, count:{$sum:1}}},
    {$sort: {count: 1}}
]);

db.sales.aggregate([
    {$match: {product: {$in:["Smartwatch", "Headphones"]}}},
    {$group:{_id: {product:"$product"}, total: {$sum:"$totalPrice"}, count:{$sum:1}}},
    {$sort: {total: -1}}
]);


// $group, $sort
// this sort does not work
db.sales.aggregate([
  {$group:{_id: {product:"$product", date: "$date"}, total: {$sum:"$totalPrice"}, count:{$sum:1}}},
  {$sort: {date: -1}}
]);

// this sort does work
db.sales.aggregate([
  {$group:{_id: {product:"$product", date: "$date"}, total: {$sum:"$totalPrice"}, count:{$sum:1}}},
  {$sort: {"_id.date": -1}}
]);