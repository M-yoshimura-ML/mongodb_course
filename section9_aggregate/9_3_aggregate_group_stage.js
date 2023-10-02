
conn = new Mongo();
db = conn.getDB("shops");


// $group 
db.sales.aggregate([
    {$match: {product: "Smartwatch"}},
    {$group:{_id: {product:"$product"}, total: {$sum:"$totalPrice"}, count:{$sum:1}}}
]);

// data check
db.sales.find({product: "Smartwatch"});


// total
db.sales.aggregate([
  {$group:{_id: {date: "$date"}, total: {$sum:"$totalPrice"}, count:{$sum:1}}}
]);

// average
db.sales.aggregate([
  {$group:{_id: {date: "$date"}, total: {$avg:"$totalPrice"}, count:{$sum:1}}}
]);

// $group with multiple fields
db.sales.aggregate([
  {$group:{_id: {product:"$product", date: "$date"}, total: {$sum:"$totalPrice"}, count:{$sum:1}}}
]);
