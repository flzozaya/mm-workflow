const { getStyles } = require("./buildCSS");

async function buildVariant(fileObj) {
  let cssArr = await getStyles()
  console.log(cssArr, fileObj);
};

module.exports = buildVariant;

// console.log("okok", stylesArr);

// No errors during the compilation, write this result on the disk
// fs.writeFile(obj.outFile, result.css, function(err) {
//   if (!err) {
//     //file written on disk
//   }
// });
