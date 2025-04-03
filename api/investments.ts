export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  try{
      res.status(200).json([
          {
              "id": 1,
              "name": "Stock Portfolio",
              "amount": 5000,
              "returns": 7.5,
              "date": "2025-02-15T14:00:00Z"
            },
            {
              "id": 2,
              "name": "Crypto Fund",
              "amount": 2500,
              "returns": 12,
              "date": "2025-01-10T09:30:00Z"
            }
      ]);
  } catch(error){
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
  }
  