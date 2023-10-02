
conn = new Mongo();
db = conn.getDB("shops");


// this doesn't work because of missing $
db.products.find({$expr:{$gt:["rating.average", "rating.max"] }});

// $expr 
// this does work (but return 0 doc)
db.products.find({$expr:{$gt:["$rating.average", "$rating.max"] }});
// return all docs
db.products.find({$expr:{$lt:["$rating.average", "$rating.max"] }});
db.products.find({$expr:{$lt:["$rating.average", "$rating.max"] }}).count();




db.products.find({$expr:{$gt:[
    {$cond: {
        if: {$gte: ["$unitInStocks", 30]}, 
        then: {$subtract: ["$price", 30]}, 
        else: "$price" 
        }
    },
    100
] }});
