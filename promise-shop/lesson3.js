'use strict'

var promise = new Promise(
	function(fulfill,reject){
	setTimeout(function(){
		const err = new Error('REJECTED!');
		reject(err);
	},300);
}).then(undefined,onReject);


function onReject(error){
	console.log(error.message);
}
