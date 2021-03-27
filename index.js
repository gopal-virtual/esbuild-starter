const fs = require("fs");
const path = require("path");
const { prompt } = require("enquirer");
const colors = require("ansi-colors");

async function init() {
  // get template name from cmd arg
  const { template } = await prompt({
    type: "select",
    name: "template",
    message: "Pick a template",
    // todo: fetch available templates dynamically
    choices: ["react", "react-ts"],
  });

  // get dir name from cmd arg
  const { directory } = await prompt({
    type: "input",
    name: "directory",
    message: "Type your directory name",
    initial: "es-react-project",
  });

  // copy template dir to target
  const sourceDir = path.join(__dirname, "templates", template);
  const targetDir = path.join(process.cwd(), directory);
  copy(sourceDir, targetDir);

  // change package.json project name
  const pkg = require(path.resolve(targetDir, "package.json"));
  pkg.name = directory
    .trim()
    .replace(/\s+/g, "-")
    .replace(/^[._]/, "")
    .replace(/[~)('!*]+/g, "-");
  fs.writeFileSync(
    path.resolve(targetDir, "package.json"),
    JSON.stringify(pkg, null, 2)
  );

  // rename gitignore
  fs.renameSync(
    path.resolve(targetDir, "_gitignore"),
    path.resolve(targetDir, ".gitignore")
  );

  // give instructions to user to install
  const info = [
    "\n",
    colors.bold.green("✔ You have successfully created the project"),
    "\n",
    `   You can get started by running:`,
    colors.bold.blue(`   cd ${directory}`),
    colors.bold.blue(`   npm install`),
    `   ${colors.bold.blue("npm run dev")} & ${colors.bold.blue(
      "npm run serve"
    )} simultaneously`,
    "\n",
  ];

  console.log(info.join("\n"));
}

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}
init().catch((e) => {
  console.error(e);
});
