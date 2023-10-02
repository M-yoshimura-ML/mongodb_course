
conn = new Mongo();
db = conn.getDB("shops");


// perform multiple keys join with $lookup
db.sales.aggregate([
  { $match: {date:{$lte: "2023-07-07"}}},
  {  $lookup: {
      from: "orderDetails",
      let: { orderID: "$orderID", date: "$date"},
      pipeline: [
        { $match:
          { $expr:
            { $and:
              [
                { $eq: ["$orderID", "$$orderID"] },
                { $eq: ["$orderDate", "$$date"] }
              ]
            }
          }
        },
        { $project: {_id: 0} }
      ],
      as: "orderData"
     }
  }
]);


db.sales.aggregate([
  { $match: {date:{$lte: "2023-07-07"}}},
  {  $lookup: {
      from: "orderDetails",
      let: { orderID: "$orderID", date: "2023-07-04"},
      pipeline: [
        { $match:
          { $expr:
            { $and:
              [
                { $eq: ["$orderID", "$$orderID"] },
                { $eq: ["$orderDate", "$$date"] }
              ]
            }
          }
        },
        { $project: {_id: 0} }
      ],
      as: "orderData"
     }
  }
]);


// this aggregation is similar to this pseudo-SQL statement
SELECT s.*, o.<orderData>
FROM sales s
LEFT JOIN orderDetails o
on s.orderID = o.orderID
and s.date = o.orderDate
WHERE
s.date <= "2023-07-07";


