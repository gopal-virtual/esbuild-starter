const path = require("path");
const fs = require("fs");
const template = require("../public/template.js");

require("esbuild")
  .build(require("./config.prod.js"))
  .catch(() => process.exit(1));

fs.writeFileSync(
  path.resolve(__dirname, "../build/index.html"),
  template("./build.js")
);

fs.copyFileSync(
  path.resolve(__dirname, "../public/favicon.svg"),
  path.resolve(__dirname, "../build/favicon.svg")
);
