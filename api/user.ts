export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  try {
    res.status(200).json({
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      balance: 18669,
      savings: 4500,
      spendings: 8669,
      investments: 5500,
      currency: "USD",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
