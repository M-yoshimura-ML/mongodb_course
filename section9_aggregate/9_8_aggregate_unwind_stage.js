
conn = new Mongo();
db = conn.getDB("shops");


// $group
// Pushing elements into newly created arrays
db.sales.aggregate([
  {$group: {_id:{date:"$date"}, allCategories:{$push:"$category"} }}
]);

// $unwind: takes one document and splits out multiple documents
db.sales.aggregate([
  {$match: {date: "2023-07-01"}},
  {$unwind: "$category"}
]);


// $match, $unwind, $group
db.sales.aggregate([
  {$match: {date: "2023-07-01"}},
  {$unwind: "$category"},
  {$group: {_id:{date:"$date"}, allCategories:{$push:"$category"} }}
]);

// using $addToSet
db.sales.aggregate([
  {$match: {date: "2023-07-01"}},
  {$unwind: "$category"},
  {$group: {_id:{date:"$date"}, allCategories:{$addToSet:"$category"} }}
]);

