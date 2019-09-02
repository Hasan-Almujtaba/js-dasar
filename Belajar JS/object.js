// membuat object
// objek literal
var obj = {
	nama : 'Hasan Al Mujtaba',
	umur : 18,
	lulus : true,
	nun : [85, 86, 50, 85]
};

// function declaration
function buatObjek( nama, umur, lulus, nun) {
	var obj = {};
	obj.nama = nama;
	obj.umur = umur;
	obj.lulus = lulus;
	obj.nun = nun;
	return obj;
}

var obj2 = buatObjek('Riza', 18, true, [70,70,70,70]);

// constructor

function Mahasiswa( nama,umur,lulus,nun ) {
	this.nama = nama;
	this.umur = umur;
	this.lulus = lulus;
	this.nun = nun;
}

var obj3 = new Mahasiswa('Angga', 18, true, [60,60,60,60]);