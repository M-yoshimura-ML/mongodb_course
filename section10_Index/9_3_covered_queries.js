
conn = new Mongo();
db = conn.getDB("shops");



db.products.getIndexes();


db.products.explain('executionStats').find({name:"Blender"},{name:1});

// query is covered by Index


db.products.explain('executionStats').find({name:"Blender"},{name:1, _id:0});


