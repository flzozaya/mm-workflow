const shell = require("shelljs");
const scriptName = process.argv[2];
const options = process.argv.slice(3);
const args = process.argv;

const folder = `Subacq-${args[args.length - 1]}`
switch (scriptName) {
  case "scaffold":
    options;
    isNaN(options)
      ? shell.echo("Error: Invalid scaffold option") && shell.exit(1)
      : shell.exec(`mkdir SUBACQ-${options} SUBACQ-${options}/compiled`) &&
        shell.exec("npm run build");
    break;

  default:
    break;
}
