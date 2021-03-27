const path = require("path");
const root = process.cwd();

module.exports = {
  bundle: true,
  entryPoints: [path.resolve(root, "./src/main.js")],
  outfile: path.resolve(root, "./build/build.js"),
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  loader: {
    ".js": "jsx",
    ".svg": "dataurl",
    ".png": "dataurl",
  },
  define: { global: "window" },
};
