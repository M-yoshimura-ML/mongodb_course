
// 1.Search products in shops DB that have max higher than 8.9 and unitInStocks lower than 30
db.products.find({"rating.max":{$gt: 8.9}, unitInStocks:{$lt: 30}});

// 2.Search products that have a genre of "Gaming" or "Storage"
db.products.find({$or:[{genre: "Gaming"}, {genre:"Storage"}]});

// this is also fine
db.products.find({ genre:{$in: [ "Gaming","Storage"]} });


// 3.Search products that have a description including "gaming" and price lower than 100
db.products.find({description: {$regex:/gaming/ }, price: {$lt: 100}});

