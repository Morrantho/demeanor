let ICommand = require("./ICommand.js");
let CommandManager = require("./CommandManager.js");

class MongooseCommand extends ICommand{
	constructor(){
		super();
		this.name="mongoose";
		this.description="Creates a mongoose config file.";
		this.usage="demeanor mongoose myMongooseConfig"
		this.templates=[
			{"dir":"config","template":"MongooseTemplate","ext":".js"}
		];
	}

	Execute(args){
		super.Execute(args);
	}
}
module.exports = MongooseCommand;