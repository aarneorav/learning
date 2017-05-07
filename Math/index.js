const fiftyFifty = function() {
	return Math.floor((Math.random() * 10) + 1) % 2 === 0;
};

let i = 0;
while(true) {
	console.log(`Number is ${(fiftyFifty() === true ? 0 : 1)}`);

	if (++i >= 50) {
		break;
	}
}
 