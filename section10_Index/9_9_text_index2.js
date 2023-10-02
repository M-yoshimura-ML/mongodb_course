
conn = new Mongo();
db = conn.getDB("shops");



// phrase search: "performance laptop"
db.products.find({$text: {$search: "\"performance laptop\""}});


// text search with excluded keywords(negation)
db.products.find({$text: {$search: "performance -laptop"}});

db.products.find({$text: {$search: "performance -laptop -fitness"}});



// can not create additional text index since text index is already existing.
db.products.createIndex({name:"text"});

db.products.getIndexes();

db.products.dropIndex("description_text");

db.products.createIndex({description:"text", name:"text"});



db.products.find({},{name:1,description:1,_id:0});
// text index for name is working
db.products.find({$text: {$search: "\"portable power bank\""}});

