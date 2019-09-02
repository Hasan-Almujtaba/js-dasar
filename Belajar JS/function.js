// Mengetahui sisi kubus
function hitungDuaVolumeKubus(a, b) {

	// var total, volumeA, volumeB;

	// volumeA = a * a * a;
	// volumeB = b * b * b;

	// total = volumeA + volumeB;

	// return total;

	// contoh refactoring
	return a * a * a + b * b * b;
}

// function yang menggunakan arguments
// arguments merupakan pseudo variable berbentuk variable yang menampung semua input yang dimasukkan pada argument
function tambah() {
	var hasil = 0;

	for (var i = 0; i < arguments.length; i++) {
		hasil += arguments[i];
	}

	return hasil;
}

console.log(hitungDuaVolumeKubus(8, 3,))