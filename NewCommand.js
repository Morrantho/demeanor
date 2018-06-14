let ICommand = require("./ICommand.js");
let CommandManager = require("./CommandManager.js");
let exec = require('child_process').exec;

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
		this.Parse(["routes"],"config","RoutesTemplate",".js",args[0]);
		this.Parse(["mongoose"],"config","MongooseTemplate",".js",args[0]);
		this.Parse(["package"],"","PackageTemplate",".json",args[0]);
		this.Parse(["server"],"","ServerTemplate",".js");

		console.log("***INSTALLING DEPENDENCIES***\n");
		exec("npm install",(err,stdout,stderr)=>{console.log(stdout);});
	}
}
CommandManager.Register("new",NewCommand);
module.exports = NewCommand;