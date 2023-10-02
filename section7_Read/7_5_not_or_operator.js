
conn = new Mongo();
db = conn.getDB("shops");



// $not + $eq operator
return 47 docs
db.products.find({ "rating.average": {$not: {$eq: 8.9}}}).count();

// $ne operator
db.products.find({ "rating.average": {$ne: 8.9}}).count();

// $eq operator
db.products.find({ "rating.average": {$eq: 8.9}}).count();



// $or operator
// return 6 docs
db.products.find({$or:[{ "rating.average":{$lt: 7.0}}, {"rating.max": {$gt: 9.5}} ]});
db.products.find({$or:[{ "rating.average":{$lt: 7.0}}, {"rating.max": {$gt: 9.5}} ]}).count();

// return 7 docs
db.products.find({$or:[{ "rating.average":{$lt: 7.0}}, {madeIn: "Italy"} ]})
db.products.find({$or:[{ "rating.average":{$lt: 7.0}}, {madeIn: "Italy"} ]}).count();



