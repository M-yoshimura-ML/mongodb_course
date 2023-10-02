
conn = new Mongo();
db = conn.getDB("shops");


// unitPrice: greater than 50
// group: date
// how many quantities & totalPrice per date
// order by date Decending


db.sales.aggregate([
  {$match: {unitPrice: {$gt:50}}},
]);

db.sales.aggregate([
  {$match: {unitPrice: {$gt:50}}},
  {$group:{_id: {date: "$date"}, totalPrice: {$sum:"$totalPrice"}, totalQuantities:{$sum:"$quantity"}}}
]);

// final answer
db.sales.aggregate([
  {$match: {unitPrice: {$gt:50}}},
  {$group:{_id: {date: "$date"}, totalPrice: {$sum:"$totalPrice"}, totalQuantities:{$sum:"$quantity"}}},
  {$sort: {"_id.date": -1}}
]);