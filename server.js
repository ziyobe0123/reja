console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Roote code
// app.get("/hello", function (req, res) {
//   res.end(`<h1 style="background: red">Hello World by Ziyoviddin</h1>`);
// });

// app.get("/gift", function (req, res) {
//   res.end(`<h1>Siz sovg'alar bo'limidasiz</h1>`);
// });
app.post("/create-item", (req, res) => {
  console.log(req);
  res.json({ test: "succss" });
});

app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
