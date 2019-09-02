var jmlAngkot = 10,
	angkotBeroperasi = 6,
	lembur = 8,
	lembur_2 = 10;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

	if (noAngkot <= angkotBeroperasi) {
		console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.' );
	}
	else if(noAngkot === lembur || noAngkot === lembur_2 ) {
		console.log('Angkot No. ' + noAngkot + ' sedang lembur' )
	}
	else {
		console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
	}
	
}