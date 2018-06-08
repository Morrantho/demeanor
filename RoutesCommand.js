let ICommand = require("./ICommand.js");
let CommandManager = require("./CommandManager.js");

class RoutesCommand extends ICommand{
	constructor(){
		super();
		this.name="routes";
		this.description="Creates a routing file.";
		this.usage="demeanor routes myRoutes"
		this.templates=[
			{"dir":"config","template":"RoutesTemplate","ext":".js"}
		];
	}

	Execute(args){
		super.Execute(args);
	}
}
module.exports = RoutesCommand;