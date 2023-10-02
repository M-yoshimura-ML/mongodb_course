
conn = new Mongo();
db = conn.getDB("shops");


// regex is used when there is no text index
db.products.find({description: {$regex:/camera/ }});


// create text index
db.products.createIndex({description: "text"});


db.products.getIndexes();


// if there is no text index, this query becomes error.
db.products.find({$text: {$search: "performance"}});

// single word search: "performance" or "laptop"
db.products.find({$text: {$search: "performance laptop"}});

// option score
db.products.find(
 {$text: {$search: "performance laptop"}}, 
 {score: {$meta: "textScore"}}
).sort({score: {$meta: "textScore"}});

