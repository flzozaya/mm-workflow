const shell = require("shelljs");
const fs = require("fs");
const path = require("path");
var sass = require("node-sass");

let stylesArr = [];

const getStyles = () => stylesArr;

const prepareSCSS = directory => {

  fs.readdir(directory, (err, scssFiles) => {
    if (err) throw err;

    scssFiles.forEach(file => {
      const ext = path.extname(file);
      const fileName = path.basename(file, ext);
      const obj = {
        file: `${directory}/${file}`,
        outFile: `${directory}/${fileName}.css`
      };

      sass.render(obj, (err, result) => {
        if (err) throw err;
        stylesArr = [...stylesArr, { file, css: result.css.toString() }];
        getStyles();
      });
    });
  });
};

module.exports = { prepareSCSS, getStyles };
