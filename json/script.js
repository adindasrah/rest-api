// json ke objek


// let mahasiswa = {
// 	nama : "Amelia Mariska",
// 	nrp : 173040048,
// 	email : "ameliamariska@mail.unpas.ac.id"
// }

// console.log(JSON.stringify(mahasiswa));


// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
// 	if(xhr.readyState == 4 && xhr.status == 200){
// 		let mahasiswa = JSON.parse(this.responseText);
// 		console.log(mahasiswa);
// 	}
// }

// xhr.open('GET','coba.json', true);
// xhr.send();


$.getJSON('coba.json', function(data){
	console.log(data);
});