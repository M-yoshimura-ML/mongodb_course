
conn = new Mongo();
db = conn.getDB("shops");


// explain without Index
db.products.find();
db.products.explain().find({name:"Blender"});

// explain('executionStats') without Index
db.products.explain('executionStats').find({name:"Blender"});


// adding a single field Index
// 1: ascending Index, -1:descending Index
db.products.createIndex({name:1});

db.products.explain().find({name:"Blender"});

db.products.explain('executionStats').find({name:"Blender"});

