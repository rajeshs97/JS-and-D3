var fs = require("fs");
//var csv = require("fast-csv");
fs.createReadStream('India2011.csv').on('data',function (data) {
	// body...
	console.log(data.toString());
	var d = data;
	console.log(d.toString());
})
.on('end',function(data){
	console.log("end");
})