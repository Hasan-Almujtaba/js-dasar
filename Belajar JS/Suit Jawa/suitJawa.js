var tanya = true;
while ( tanya ) {

	// menangkap pilihan player
	var p = prompt('Masukkan pilihanmu \n Pilihan: gajah, orang, semut');

	// menentukan pilihan computer
	var comp = Math.random();

	if ( comp < 0.34) {
		comp = 'gajah';
	}
	else if ( comp > 0.34 <= 0.67 ) {
		comp = 'orang';
	}
	else {
		comp = 'semut';
	}

	// menentukan hasil
	var hasil = '';
	if ( p == comp ) {
		hasil = 'SERI!';
	}
	else if ( p == 'gajah' ) {
		// if ( comp == 'orang' ) {
		// 	hasil = 'MENANG!';
		// }
		// else {
		// 	hasil = 'KALAH!';
		// }
		hasil = ( comp == 'orang') ? 'MENANG!' : 'KALAH!';
	}
	else if (p == 'orang') {
		hasil = ( comp == 'gajah') ? 'KALAH!' : 'MENANG!';
	}
	else if (p == 'semut') {
		hasil = ( comp = 'orang') ? 'KALAH!' : 'MENANG!';
	}
	else {
		hasil = 'Memasukkan pilihan yang salah';
	}

	// menampilkan hasil
	alert('Kamu memilih ' + p + ' computer memilih ' + comp + '\nHasilnya kamu: ' + hasil);

	// mengulang permainan
	tanya = confirm('Apakah kamu ingin mengulang permainan?');


}
alert('Terimakasih telah bermain');