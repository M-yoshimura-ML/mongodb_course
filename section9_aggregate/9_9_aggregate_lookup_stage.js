// mongoimport orderDetails.json -d shops -c orderDetails --jsonArray --drop

conn = new Mongo();
db = conn.getDB("shops");



// $lookup
db.sales.aggregate([
  { $match: {date:{$lte: "2023-07-07"}}},
  {  $lookup: {
      from: "orderDetails",
      localField: "orderID",
      foreignField: "orderID",
      as: "orderData"
     }
  }
]);

