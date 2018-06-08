let ICommand = require("./ICommand.js");
let CommandManager = require("./CommandManager.js");

class ModelCommand extends ICommand{
	constructor(){
		super();
		this.name="model";
		this.description="Creates a Mongoose Model.";
		this.usage="demeanor model myModel"
		this.templates=[
			{"dir":"models","template":"ModelTemplate","ext":".js"}
		];
	}

	Execute(args){
		super.Execute(args);
	}
}
CommandManager.Register("model",ModelCommand);
module.exports = ModelCommand;