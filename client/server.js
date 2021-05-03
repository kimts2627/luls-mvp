const express = require("express");
const next = require("next");
const https = require("https");
const morgan = require("morgan");
const fs = require("fs");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync("./localhost+1-key.pem"),
  cert: fs.readFileSync("./localhost+1.pem"),
};

app.prepare().then(() => {
  const server = express();

  server.use(morgan("dev"));

  server.get("/a", (req, res) => {
    return app.render(req, res, "/a", req.query);
  });

  server.get("/b", (req, res) => {
    return app.render(req, res, "/b", req.query);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

  // https.createServer(httpsOptions, server).listen(3000, (err) => {
  //   if (err) throw err;
  //   console.log(`> Ready on https://localhost:${port}`);
  // });
});
