let fs = require("fs");

const Directory = {
	Create:(dir)=>{
	    fs.mkdirSync(dir);
	},

	Exists:(dir)=>{
		if(fs.existsSync(dir)){
			return true;
		}
		return false;
	}
};
module.exports = Directory;