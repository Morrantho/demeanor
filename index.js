let CommandManager = require("./CommandManager.js");
let NewCommand = require("./NewCommand.js");
let ControllerCommand = require("./ControllerCommand.js");
let ModelCommand = require("./ModelCommand.js");
let ViewCommand = require("./ViewCommand.js");
let RoutesCommand = require("./RoutesCommand.js");
let MongooseCommand = require("./MongooseCommand.js");

const args = process.argv.slice(2);

CommandManager.Execute(args[0],args);