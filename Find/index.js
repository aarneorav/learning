const pieces = [['cake']],
	  pieces2 = ['cake'],
	  pieces3 = ['cake'],
	  pieces4 = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[['not cake', 'cake']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
      pieces5 = ['cake'],
      pieces6 = ['saiapuru', ['saiapuru2', []]];


function findPiece(type, pieces) {
	var key,
		piece;

	for(key in pieces) {
		console.log(key, pieces[key]);
		piece = pieces[key];

		if (typeof piece === 'object') {
			return findPiece(type, piece);
		} else if (typeof piece === 'string' && piece === type) {
			return 'found';
		}
	}

	return 'not found';
}

console.log('Piece ' + findPiece('cake', pieces));
console.log('Piece ' + findPiece(pieces2));
console.log('Piece ' + findPiece(pieces3));
console.log('Piece ' + findPiece(pieces4));
console.log('Piece ' + findPiece(pieces5));
console.log('Piece ' + findPiece('saiapuru', pieces6));