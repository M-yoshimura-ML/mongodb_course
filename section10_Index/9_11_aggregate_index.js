
conn = new Mongo();
db = conn.getDB("shops");



db.products.getIndexes();

// match stage
db.products.aggregate([ 
  {$match: {$text: { $search: "portable" }}}
]);

// text index is used.
db.products.explain().aggregate([ 
  {$match: {$text: { $search: "portable" }}}
]);

db.products.explain().aggregate([ 
  {$match: {$text: { $search: "portable" }}},
  {$project: {name:1, description:1}}
]);



// Since there is no $match stage, index is not used.
db.products.explain().aggregate([ 
  {$group:{_id: {country: "$madeIn"}, totalPrice: {$sum:"$price"}, totalQuantities:{$sum:1}}}
]);



