
conn = new Mongo();
db = conn.getDB("shops");

// $sort
db.sales.aggregate([
  {$sort: {date: -1}}
]);


let pageSize = 5;
// $sort, $skip, $limit
// aggregation pipeline stage order does matter 
db.sales.aggregate([
  {$sort: {date: -1}},
  {$skip: pageSize},
  {$limit: pageSize}
]);

