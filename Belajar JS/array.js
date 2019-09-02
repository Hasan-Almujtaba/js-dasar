// menambah data pada array

var arr = [];
arr[0] = 'senin';
arr[1] = 'selasa';
arr[2] = 'rabu';

// mengurangi data pada array

var hari = ['senin', 'selasa', 'rabu'];
hari[1] = undefined;

// menampilkan data

var bulan = ['januari', 'februari', 'maret'];

// for (var i = 0; i < bulan.length; i++) {
// 	console.log(bulan[i]);
// }

// method array

// 1. join
// berfungsi mengubah array menjadi string

var web = ['w3', 'sekolahkoding', 'duniailkom'];
// console.log(web.join(' - '));


// 2. push & pop
// push = menambahkan elemen baru pada akhir array, pop = menghilangkan elemen baru pada akhir array
// web.push('stackoverflow', 'codecademy')
// web.pop();


// 3. unshift & shift 
// unshift = menambahkan elemen baru pada awal array, shift = menghilangkan elemen baru pada awal array
// web.unshift('stackoverflow', 'codecademy');
// web.shift();


// 4.splice & slice
// splice = splice(index awal, mau dihapus berapa, elemen baru)
// web.splice(1, 2, 'stackoverflow', 'codecademy' );

// slice = slice(index awal, akhir)
// var web2 = web.slice(1,3);


// 5. forEach
// perulangan for untuk array
// var cetak = function(e) { 
// 	(console.log(e)) 
// };
// web.forEach(cetak);
// web.forEach(function(e, i){
// 	console.log('Web ke - ' + (i+1) + ' ' + e );
// })

// 6. map
// sama dengan foreach namun mengembalikan array
// var angka = [1,2,5,6,7,3];
// var angka2 = angka.map(function(e) {
// 	return e * 2;
// })

// console.log(angka2);

// 7. sort
// mengurutkan nilai array
// var angka = [1,2,5,6,7,3,25,75];
// console.log(angka.sort(function(a,b){
// 	return a-b;
// }));


// 8 filter & find
// filter mencari & mengembalikan dalam bentuk array
// var angka = [1,2,5,6,7,3,25,75];
// var angka2 = angka.filter(function(e){
// 	// return e == 6;
// 	return e > 5;
// })
// console.log(angka2);

// find menemukan satu nilai
var angka = [1,2,5,6,7,3,25,75];
var angka2 = angka.find(function(e){
	return e > 7;
})
console.log(angka2);