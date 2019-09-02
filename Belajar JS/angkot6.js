var jmlAngkot = 10,
	angkotBeroperasi = 4,
	lembur = 6,
	lembur_2 = 10,
	lembur_3 = 5;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

	if (noAngkot <= angkotBeroperasi && noAngkot !== lembur_3) {
		console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.' );
	}
	else if(noAngkot === lembur || noAngkot === lembur_2 || noAngkot === lembur_3) {
		console.log('Angkot No. ' + noAngkot + ' sedang lembur' );
	}
	else {
		console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
	}
	
}