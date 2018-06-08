let ICommand = require("./ICommand.js");
let CommandManager = require("./CommandManager.js");

class ViewCommand extends ICommand{
	constructor(){
		super();
		this.name="view";
		this.description="Creates a View for use with EJS.";
		this.usage="demeanor view myView"
		this.templates=[
			{"dir":"views","template":"ViewTemplate","ext":".ejs"}
		];
	}

	Execute(args){
		super.Execute(args);
	}
}
CommandManager.Register("view",ViewCommand);
module.exports = ViewCommand;