var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
	
	// jika angkot kosong
	if (penumpang.length == 0) {
		// tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array dan keluar dari function
		return penumpang;
	}
	else {
		// telusuri seluruh kursi dari awal
		for (var i = 0; i < penumpang.length; i++) {
			
			// jika ada kursi kosong
			if (penumpang[i] == undefined) {
				// tambah penumpang di kursi tersebut
				penumpang[i] = namaPenumpang;
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
			// jika sudah ada nama yg sama
			else if ( penumpang[i] == namaPenumpang ) {
				// tampilkan pesan error 
				console.log(namaPenumpang + 'sudah ada di dalam angkot.');
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
			// jika seluruh kursi terisi
			else if ( i == penumpang.length-1 ) {
				// tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}
	}

}

var hapusPenumpang = function (namaPenumpang, penumpang) {
	// Jika angkot kosong
	if ( penumpang.length == 0 ) {
		// tampilkan pesan bahwa angkot kosong
		console.log('Tidak ada penumpang');
		// kembalikan isi array dan keluar dari function
		return penumpang;
	}
	else {
		// telusuri seluruh kursi dari awal
		for (var i = 0; i < penumpang.length; i++) {
			
			// jika nama penumpang sesuai
			if ( penumpang[i] == namaPenumpang ) {
				// hapus penumpang dengan mengubah elemen menjadi undifined
				penumpang[i] = undefined;	
				// kembalikan isi array dan keluar dari function		
				return penumpang;
			}
			// jika tidak ada nama yg sama
			else {
				// tampilkan pesan kesalahannya
				console.log(namaPenumpang + ' tidak berada di dalam angkot');
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}

	}
}

