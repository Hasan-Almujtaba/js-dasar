function tes(n) {
	
	// base case
	if (n === 0) return;

	console.log(n);
	tes(n-1)
};

function faktorial(n) {
	if (n === 0) return 1;

	return n * faktorial(n-1);
}

faktorial(5);