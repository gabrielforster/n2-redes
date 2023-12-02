const path = require("path")
const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static files
app.use("/static", express.static(path.join(__dirname,  "/public")))

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    res.redirect(301, "/")
  }

  res.sendFile(__dirname + "/public/404.html")
})

const pathsAndRoutes = new Map([
  ["/", "index"],
  ["/topologias", "topologias"],
  ["/protocolos", "protocolos"],
  ["/login", "login"],
  ["/404", "404"],
  ["/500", "500"]
])

pathsAndRoutes.forEach((route, path) => {
  app.get(path, (_, res) => {
    res.sendFile(__dirname + `/public/${route}.html`)
  })
})

app.use((_, res) => {
  res.sendFile(__dirname + "/public/404.html")
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
