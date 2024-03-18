const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/bfhl", (req, res) => {
  const data = req.body.data;

  const evenNumbers = data.filter(
    (num) => num % 2 === 0 && typeof num === "number",
  );
  const oddNumbers = data.filter(
    (num) => num % 2 !== 0 && typeof num === "number",
  );
  const alphabets = data
    .filter((char) => typeof char === "string")
    .map((char) => char.toUpperCase());

  const user_id = "john_doe_17091999";

  const response = {
    is_success: true,
    user_id: user_id,
    email: "john@xyz.com",
    roll_number: "ABCD123",
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets,
  };

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
