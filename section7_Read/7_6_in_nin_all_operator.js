
conn = new Mongo();
db = conn.getDB("shops");



// $in operator
return 6 docs
db.products.find({"rating.average": {$in:[8.5, 8.9] }});
db.products.find({"rating.average": {$in:[8.5, 8.9] }}).count();

// $nin operator
db.products.find({"rating.average": {$nin:[8.5, 8.9] }});
db.products.find({"rating.average": {$nin:[8.5, 8.9] }}).count();


// $in operator instead of $or
// db.products.find({$or:[{ madeIn:"Japan"}, {madeIn: "Italy"} ]});
db.products.find({madeIn: {$in:["Japan","Italy" ]}});


// $all operator
// this doesn't work because madeIn is single value
db.products.find({madeIn: {$all:["Japan","Italy" ]}});


// this does work
db.products.find({genre: {$all:["Appliances","Kitchen" ]}});
db.products.find({genre: {$all:["Appliances","Kitchen" ]}}).count();

db.products.find({genre: {$in:["Appliances","Kitchen" ]}});
db.products.find({genre: {$in:["Appliances","Kitchen" ]}}).count();
