
conn = new Mongo();
db = conn.getDB("shops");

// this 2 operations are same
db.products.find({$and:[{price:{$gt:129}, genre:"Gaming"}]});
db.products.find({$and:[{price:{$gt:129}}, {genre:"Gaming"}]});

db.products.find({price:{$gt:129}, genre:"Gaming"});


// this works here but this will not work in all drivers because in JS, having repeat names in same object is not allowed
// return 12 docs
db.products.find({genre:"Gaming", genre: "Appliances"});
db.products.find({genre:"Gaming", genre: "Appliances"}).count();


// this returns 4 docs because second One "Gaming" repalce first one "Appliances"
db.products.find({genre:"Appliances", genre: "Gaming"}).count();

// $and operator
// return 0 doc
db.products.find({$and:[{genre:"Appliances"}, {genre: "Gaming"}]}).count();
// return 12
db.products.find({$and:[{genre:"Appliances"}]},{genre:1});
db.products.find({$and:[{genre:"Appliances"}]},{genre:1}).count();


db.products.find({$and:[{genre:"Appliances"}, {genre: "Kitchen"}]},{genre:1}).count();
db.products.find({$and:[{genre:"Appliances"}, {genre: "Kitchen"}]},{genre:1});

// $nor operator
// returns 34 docs
db.products.find({$nor:[{genre:"Appliances"}, {genre: "Gaming"}]}).count();
db.products.find({$and:[{genre:"Appliances"}, {genre: "Gaming"}]});

