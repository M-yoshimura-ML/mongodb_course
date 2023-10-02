
conn = new Mongo();
db = conn.getDB("shops");


db.products.getIndexes();
db.products.dropIndex("rating.average_1_manufacturedAt_1");
db.products.getIndexes();

// create index for array 
db.products.createIndex({"genre": 1});

// this works
db.products.explain().find({"genre": "Outdoor"});

// IXSCAN, isMultikey:true, pull out all values in the array & store them as separate elements in index
db.products.explain('executionStats').find({"genre": "Outdoor"});

