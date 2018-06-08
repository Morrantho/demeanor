let fs = require("fs");

const File = {
	Write:(title,content,cb)=>{
		fs.writeFile(title,content,cb);
	},

	Read:(path,cb)=>{
		fs.readFile(path,"utf8",cb);
	},
};
module.exports = File;