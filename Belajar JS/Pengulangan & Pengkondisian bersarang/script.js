var s = '';
// baris
for ( var i = 1; i <= 10; i++) {
	// kolom
	for ( var j = 1; j <= i; j++ ){
		s += '*';
	}
	s += '\n';
}
console.log(s);