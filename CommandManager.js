const CommandManager = {
	commands:[],

	Register:(cmd,clazz)=>{
		CommandManager.commands[cmd] = clazz;
	},

	Help:()=>{
		for(let command in CommandManager.commands){
			console.log("--------------------------------");
			new CommandManager.commands[command]().Help();
			console.log("--------------------------------");
		}
	},

	Execute:(cmd,args)=>{
		if(CommandManager.commands[cmd]){
			new CommandManager.commands[cmd]().Execute(args.slice(1));
		}else{
			CommandManager.Help();
		}
	}
};
module.exports = CommandManager;