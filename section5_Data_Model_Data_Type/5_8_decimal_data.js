
conn = new Mongo();
db = conn.getDB("schools");


// register double data type
db.numDecimal.insertOne({
  a:0.3,
  b:0.2
});


// register decimal data type
db.numDecimal.insertOne({
  a:NumberDecimal("0.3"),
  b:NumberDecimal("0.2")
})



db.numDecimal.aggregate([
  {$project: {calcResult: {$subtract:["$a", "$b"]}} }
]);




