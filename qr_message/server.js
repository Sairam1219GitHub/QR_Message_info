// const express = require("express");
// const cors = require("cors");
// const path = require("path");

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(express.static(path.join(__dirname, "public")));

// // Secure PIN and message
// const CORRECT_PIN = "123456";
// const SECRET_MESSAGE = "Happy birth day";

// app.post("/verify", (req, res) => {
//   const { pin } = req.body;

//   if (!pin) return res.status(400).json({ success: false, msg: "No PIN provided" });

//   if (pin === CORRECT_PIN) {
//     return res.json({ success: true, secret: SECRET_MESSAGE });
//   }

//   return res.status(401).json({ success: false, msg: "Incorrect PIN" });
// });

// // Start server
// const PORT = 3000;
// app.listen(PORT, () => console.log("Server running at http://localhost:" + PORT));




const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// Secure PIN and message
const CORRECT_PIN = "123456";
const SECRET_MESSAGE = "Happy birth day";

app.post("/verify", (req, res) => {
  const { pin } = req.body;

  if (!pin) return res.status(400).json({ success: false, msg: "No PIN provided" });

  if (pin === CORRECT_PIN) {
    return res.json({ success: true, secret: SECRET_MESSAGE });
  }

  return res.status(401).json({ success: false, msg: "Incorrect PIN" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log("Server running at http://localhost:" + PORT));
