// var angka = parseInt(prompt('Masukkan angka'));

// switch ( angka ) {
// 	case 1 :
// 		alert('anda memasukkan angka satu');
// 		break;
// 	case 2 :
// 		alert('anda memasukkan angka dua');
// 		break;
// 	case 3 :
// 		alert('anda memasukkan angka tiga');
// 		break;
// 	case 4 :
// 		alert('anda memasukkan angka empat');
// 		break;
// 	case 5 :
// 		alert('anda memasukkan angka lima');
// 		break;
// 	default :
// 		alert('anda memasukkan angka selain 1-5');
// 		break;
// }

var input = prompt('Masukkan nama makanan: \n Pilihan: nasi, daging, susu, soft drink, hamburger'); 

switch ( input ) {
	case 'nasi' :
	case 'daging' :
	case 'susu' :
		alert('makanan / minuman sehat');
		break;
	case 'soft drink' :
	case 'hamburger' :
		alert('makanan / minuman tidak sehat');
		break;
	default :
		alert('Masukkan nama makan yang ada di daftar')
		break;
}