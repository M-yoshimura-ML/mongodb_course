// command from shell
// mongosh --file 6_5_insert_practice.js

conn = new Mongo();
db = conn.getDB("product");

// 1.Insert multiple products (insertOne, insertMany)
db.products.insertOne({name: "product A", _id: 1});
db.products.insertMany([{name: "product B", _id: 2}, {name: "product C", _id: 3}]);


// 2.insert duplicate ID data and “fix” with unordered inserts
// error 
db.products.insertMany([{_id:"1", name: "product D"}, {_id:"4", name: "product E"}]);
// fix
db.products.insertMany([{_id:"1", name: "product D"}, {_id:"4", name: "product E"}],{ordered: false})


// 3.write data for a new product with journal both for being guaranteed and not being guaranteed

// journal: not  guranteed
db.products.insertOne({name:"product G", _id: 5}, {w:1, j:false});

// journal guranteed
db.products.insertOne({name:"product H", _id: 6}, {w:1, j:true});