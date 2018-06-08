let ICommand = require("./ICommand.js");
let CommandManager = require("./CommandManager.js");

class NewCommand extends ICommand{
	constructor(){
		super();
		this.name="new";
		this.description="Creates a new MEAN application.";
		this.usage="demeanor new myApp"
		this.templates=[
			{"dir":"models","template":"ModelTemplate","ext":".js"},
			{"dir":"controllers","template":"ControllerTemplate","ext":".js"},
			{"dir":"views","template":"ViewTemplate","ext":".ejs"}
		];
	}

	Execute(args){
		super.Execute(args);
		this.Parse(["routes"],"config","RoutesTemplate",".js");
		this.Parse(["mongoose"],"config","MongooseTemplate",".js");
	}
}
CommandManager.Register("new",NewCommand);
module.exports = NewCommand;