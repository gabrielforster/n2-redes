const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    res.redirect(301, "/")
  }

  res.sendFile(__dirname + "/public/404.html")
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
