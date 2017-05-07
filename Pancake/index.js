const pieces = [['cake']],
	  pieces2 = ['cake'],
	  pieces3 = ['cake'],
	  pieces4 = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[['not cake', 'cake']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
      pieces5 = ['cake'],
      pieces6 = ['saiapuru', ['saiapuru2', []]];


function findPiece(pieces) {
	var key,
		piece;

	for(key in pieces) {
		piece = pieces[key];

		if (typeof piece === 'object') {
			return findPiece(piece);
		} else if (typeof piece === 'string' && piece === 'cake') {
			return 'found';
		}
	}

	return 'not found';
}

console.log('Piece ' + findPiece(pieces));
console.log('Piece ' + findPiece(pieces2));
console.log('Piece ' + findPiece(pieces3));
console.log('Piece ' + findPiece(pieces4));
console.log('Piece ' + findPiece(pieces5));
console.log('Piece ' + findPiece(pieces6));