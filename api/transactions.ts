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
            "id": "1",
            "type": "deposit",
            "amount": 5000,
            "date": "2025-03-30T10:15:00Z"
          },
          {
            "id": "2",
            "type": "withdrawal",
            "amount": 2000,
            "date": "2025-03-28T15:30:00Z"
          },
          {
            "id": "3",
            "type": "investment",
            "amount": 3000,
            "date": "2025-03-25T08:45:00Z"
          },
          {
            "id": "id-1743521001739-qobbs0mw9",
            "type": "Deposit",
            "amount": 300,
            "date": "2025-04-01T15:23:21.739Z"
          },
          {
            "id": "id-1743522637518-m1jqb0u6n",
            "type": "Deposit",
            "amount": 200,
            "date": "2025-04-01T15:50:37.518Z"
          },
          {
            "id": "id-1743522728341-krpxh0jzn",
            "type": "Deposit",
            "amount": 300,
            "date": "2025-04-01T15:52:08.341Z"
          },
          {
            "id": "id-1743523056325-x7adan89v",
            "type": "Deposit",
            "amount": 0,
            "date": "2025-04-01T15:57:36.325Z"
          },
          {
            "id": "id-1743523282170-t391mvdhj",
            "type": "Deposit",
            "amount": 190,
            "date": "2025-04-01T16:01:22.171Z"
          },
          {
            "id": "id-1743523370516-el3j79qq8",
            "type": "Deposit",
            "amount": 300,
            "date": "2025-04-01T16:02:50.516Z"
          },
          {
            "id": "id-1743523432144-fmvzq5beg",
            "type": "Deposit",
            "amount": 100,
            "date": "2025-04-01T16:03:52.144Z"
          },
          {
            "id": "id-1743523812108-uz7vfqhpg",
            "type": "Deposit",
            "amount": 400,
            "date": "2025-04-01T16:10:12.108Z"
          },
          {
            "id": "id-1743536843324-jkpkltcy8",
            "type": "Deposit",
            "amount": 100,
            "date": "2025-04-01T19:47:23.324Z"
          },
          {
            "id": "id-1743537424288-dedqzz9xk",
            "type": "Deposit",
            "amount": 100,
            "date": "2025-04-01T19:57:04.288Z"
          },
          {
            "id": "id-1743537435217-gne1k35s6",
            "type": "Deposit",
            "amount": 200,
            "date": "2025-04-01T19:57:15.217Z"
          },
          {
            "id": "id-1743537457067-hdzczv77m",
            "type": "Deposit",
            "amount": 300,
            "date": "2025-04-01T19:57:37.067Z"
          },
          {
            "id": "id-1743537536746-rou3l1vel",
            "type": "Deposit",
            "amount": 100,
            "date": "2025-04-01T19:58:56.746Z"
          },
          {
            "id": "id-1743537675722-6hzpquu2x",
            "type": "Deposit",
            "amount": 100,
            "date": "2025-04-01T20:01:15.722Z"
          },
          {
            "id": "id-1743538098031-t2rkxv8v4",
            "type": "Deposit",
            "amount": 100,
            "date": "2025-04-01T20:08:18.031Z"
          },
          {
            "id": "id-1743538257249-bkgzz1rai",
            "type": "Deposit",
            "amount": 100,
            "date": "2025-04-01T20:10:57.249Z"
          },
          {
            "id": "id-1743538591736-sapxougko",
            "type": "Deposit",
            "amount": 100,
            "date": "2025-04-01T20:16:31.736Z"
          }
    ]);
  }catch(error){
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
  }
  