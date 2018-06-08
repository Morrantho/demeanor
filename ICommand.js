let Directory = require("./Directory.js");
let File = require("./File.js");
let Util = require("./Util.js");
let main = process.argv[1];
const PWD = main.substring(0,main.indexOf("index.js"));

class ICommand{
	constructor(){
		this.name="";
		this.description="";
		this.usage="";
		this.templates=[];
	}

	Execute(args){
		if(!args || args.length < 1){this.Help();return;}
		for(let template in this.templates){
			let t = this.templates[template];
			this.Parse(args,t.dir,t.template,t.ext);
		}
	}

	Parse(args,dir,template,ext,projectName){
		args = args[0];

		if(!Directory.Exists(__dirname+"/"+dir)) Directory.Create(__dirname+"/"+dir);

		File.Read(PWD+"/templates/"+template+".txt",(err,content)=>{
			if(err){console.log(err);return;}
			let upper = args.upperFirst();

			if(projectName){
				content = content.replace(/Template/g,projectName.upperFirst());
				content = content.replace(/template/g,projectName);
			}else{
				content = content.replace(/Template/g,upper);
				content = content.replace(/template/g,args);
			}

			if(upper.includes("Controller")) upper += "Controller";
			upper += ext;

			File.Write(__dirname+"/"+dir+"/"+upper,content,(err)=>{
				if(err){console.log(err);return;}
				console.log("Created: ",args);
			});
		});
	}

	Help(){
		console.log("Command: "+this.name+"\n"+"Description: "+this.description+"\n"+"Usage: "+this.usage);
	}
}
module.exports = ICommand;