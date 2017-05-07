var numbers = [1,2,3,4,5,6,7,8,9,10],
	number;
const getNumber = function() {
	return numbers.pop();
}

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: 'OHAI> '
});



rl.prompt();

rl.on('line', (line) => {
	switch(line.trim()) {
		case 'y':
			console.log(`Yeee i quessed the ${number}`);
			process.exit(0);
			break;

		case 'n':
		    number = getNumber()
			console.log(`Is your number ${number}`);
			break;
	}

	rl.prompt();
}).on('close', () => {
	process.exit(0);
});