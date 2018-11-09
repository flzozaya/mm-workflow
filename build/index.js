const shell = require("shelljs");
const fs = require("fs");
const path = require("path");
const { prepareSCSS } = require("./buildCSS");
const buildVariant = require("./build_variants");
const directory = process.argv[process.argv.length - 1];

const pilot = () => {
  const appDirectory = fs.realpathSync(process.cwd());
  const srcDir = path.resolve(directory);
  const distDir = path.resolve(directory, "dist");

  if (process.argv.length > 3) {
    throw (console.error(
      "Error: Invalid Number of Arguments. Expected 1. Received 2. \n"
    ),
    shell.exit(1));
  }

  fs.readdir(srcDir, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      const ext = path.extname(file);
      const fileName = path.basename(file, ext);
      const variant = fileName.includes("variant") && file;
      const fileObj = {
        fullName: file,
        basename: fileName,
        ext,
        filePath: `${srcDir}/${file}`,
        outpuPath: distDir
      };

      // call function to babelify variant files
      if (variant) buildVariant(fileObj);
      //console.log("Variant: ", fileObj);
      // call function to babelify campaign script files
      else if (ext === ".js") console.log();
      //console.log("JavaScript: ", fileObj);
      // call function to transpile scss files
      else {
        const scssDir = `${srcDir}/${file}`;
        prepareSCSS(scssDir);
        // console.log("Styles dir? : ", scssDir);
      }
    });
  });
};

try {
  pilot();
} catch (error) {
  console.log(error);
}
