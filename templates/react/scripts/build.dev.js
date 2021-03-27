const path = require("path");
const fs = require("fs");
const template = require("../public/template.js");

fs.writeFileSync(
  path.resolve(__dirname, "../index.html"),
  template("./build/build.js")
);

fs.copyFileSync(
  path.resolve(__dirname, "../public/favicon.svg"),
  path.resolve(__dirname, "../favicon.svg")
);

require("esbuild").build(require("./config.dev.js"));
