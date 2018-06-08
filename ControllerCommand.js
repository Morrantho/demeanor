let ICommand = require("./ICommand.js");
let CommandManager = require("./CommandManager.js");

class ControllerCommand extends ICommand{
	constructor(){
		super();
		this.name="controller";
		this.description="Creates a controller with CRUD methods.";
		this.usage="demeanor controller myController"
		this.templates=[
			{"dir":"controllers","template":"ControllerTemplate","ext":".js"}
		];
	}

	Execute(args){
		super.Execute(args);
	}
}
CommandManager.Register("controller",ControllerCommand);
module.exports = ControllerCommand;