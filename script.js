const fs=require('fs');
// fs.readFile('./word.txt',(error,data)=>{
// if(error)
// {
// 	console.log("error");
// }
// console.log(data.toString('utf8'));
// })
// // //filer sync
// const filer=fs.readFileSync('./word.txt');
// console.log(filer.toString('utf8'));//

// //append writer
// fs.appendFile('./word.txt',"           this is text",error=>{
// 	if(error){
// 		console.log("its an error");
// 	}
// })
//deleting file
fs.unlink('./Tour Booing And Maintenance System.pptx',error=>{
	if(error){
		console.log("error");
	}
})
// //